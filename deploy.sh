#! /bin/bash

set -e
set -u

service=detector_webserver-detector 
cp -f -R  ".env.[PROD]" ".env"

serviceID=$(sudo docker service ps -f name=$service -f desired-state=running $service -q --no-trunc |head -n1)
node=$(sudo docker service ps -f name=$service -f desired-state=running $service --format="{{.Node}}"| head -n1 )

yarn install

docker service scale detector_backend-node-blue=0
yarn build
docker service scale detector_backend-node-blue=1

until curl http://localhost:5002; do
  >&2 echo "backend-node-blue - sleeping"
  sleep 3s
done 

sudo docker -H $node exec -it $service".1."$serviceID sh -c "/src/nginx/nginx-conf/switch backend-node-blue"

docker service scale detector_backend-node-green=0
rm -r "./common/green/dist" 
cp -f -R  "./common/blue/dist" "./common/green/" 

docker service scale detector_backend-node-green=1

until curl http://localhost:5001; do
  >&2 echo "backend-node-green - sleeping"
  sleep 1s
done 

sudo docker -H $node exec -it $service".1."$serviceID sh -c "/src/nginx/nginx-conf/switch backend-node-green"

docker service scale detector_backend-node-blue=0

