#!/bin/bash
echo "sleeping for 10 seconds"
sleep 10

echo init-mongo.sh time now: `date +"%T" `
mongo --host localhost:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
  use admin
  db.createUser({
    user: '$MONGO_INITDB_USERNAME',
    pwd: '$MONGO_INITDB_PASSWORD',
    roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]
  });
  use $MONGO_INITDB_DATABASE
  db.createUser({
    user: '$MONGO_INITDB_USERNAME',
    pwd: '$MONGO_INITDB_PASSWORD',
    roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]
  });
EOF

  # var cfg = {
  #   "_id": "rs0",
  #   "version": 1,
  #   "members": [
  #     {
  #       "_id": 0,
  #       "host": "database-mongodb:27017",
  #       "priority": 2
  #     },
  #   ]
  # };
  # rs.initiate(cfg);

#!/usr/bin/env bash
# echo "Creating mongo users..."
# mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: '$MONGO_INITDB_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]});rs.initiate( { _id : 'rs0', members: [ { _id : 0, host : 'database-mongodb:27017' } ] } )"
# echo "Mongo users created."