#! /bin/bash

set -e
set -u

cp -f -R  ".env.[PROD]" ".env"
env $(cat .env | grep ^[A-Z] | xargs) docker stack deploy --with-registry-auth -c docker-compose.yaml detector

service=detector_webserver-detector 
serviceID=$(sudo docker service ps -f name=$service -f desired-state=running $service -q --no-trunc |head -n1)
node=$(sudo docker service ps -f name=$service -f desired-state=running $service --format="{{.Node}}"| head -n1 )

echo "----------------------"
echo "serviceID:$serviceID"
echo "node:$node"
echo "service:$service"
echo "----------------------"
yarn install

docker service scale detector_backend-node-blue=0
yarn build
docker service scale detector_backend-node-blue=1

echo "----------------------"
echo "switch backend-node-blue"
echo "----------------------"

until curl -sS -I http://localhost:5002; do
  >&2 echo "backend-node-blue - sleeping"
  sleep 3s
done 

sudo docker -H $node exec $service".1."$serviceID sh -c "/src/nginx/nginx-conf/switch backend-node-blue"

docker service scale detector_backend-node-green=0
rm -r "./common/green/dist" 
cp -f -R  "./common/blue/dist" "./common/green/" 

docker service scale detector_backend-node-green=1

echo "----------------------"
echo "switch backend-node-green"
echo "----------------------"


until curl -sS -I http://localhost:5001; do
  >&2 echo "backend-node-green - sleeping"
  sleep 1s
done 

sudo docker -H $node exec $service".1."$serviceID sh -c "/src/nginx/nginx-conf/switch backend-node-green"

docker service scale detector_backend-node-blue=0

echo "----------------------"
echo "Finish deploy!"
echo "----------------------"
