#! /bin/bash

set -e
set -u

service=$1
shell=$2
task=${3}

serviceID=$(sudo docker service ps -f name=$service -f desired-state=running $service -q --no-trunc |head -n1)
node=$(sudo docker service ps -f name=$service -f desired-state=running $service --format="{{.Node}}"| head -n1 )
echo $node
echo $serviceID
# sudo docker -H tcp://ip-172-31-94-69.ec2.internal exec -it detector_webserver-detector.1.zts0ngi1d8rimznioggvtyxin sh -c "echo ""1"""
# sudo docker -H tcp://$node:80 exec -it $service".1."$serviceID $shell -c "$task"
# sudo docker -H tcp://$node exec -it $service".1."$serviceID $shell -c "$task"
sudo docker -H $node exec -it $service".1."$serviceID $shell -c "$task"

