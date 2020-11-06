#!/bin/bash

# this configuration is so important 
echo "Starting replica set initialize"
until mongo --host localhost:27017 -u root-admin -p 1Ta#ukB$ --eval "print(\"waited for connection\")"
do
    sleep 2
done
echo "Connection finished"
echo "Creating replica set"
mongo --host localhost:27017 -u root-admin -p 1Ta#ukB$ <<EOF
rs.initiate(
  {
    _id : 'rs0',
    members: [
      { _id : 0, host : "database-mongodb:27017", priority : 1 }
    ]
  }
)
EOF
echo "replica set created"