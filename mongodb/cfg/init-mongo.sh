#!/bin/bash

set -e

echo init-mongo.sh time now: `date +"%T" `

echo "MONGO_INITDB_ROOT_USERNAME: $MONGO_INITDB_ROOT_USERNAME"
echo "MONGO_INITDB_ROOT_PASSWORD: $MONGO_INITDB_ROOT_PASSWORD"
echo ">>>>>>> trying to create database and users"

if [ -n "${MONGO_INITDB_ROOT_USERNAME:-}" ] && [ -n "${MONGO_INITDB_ROOT_PASSWORD:-}" ]; then
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD<<EOF
use admin;
db.createUser({
  user:  '$MONGO_INITDB_USERNAME',
  pwd: '$MONGO_INITDB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_INITDB_DATABASE'
  }]
});
EOF
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD<<EOF
use admin;
db.runCommand({createRole:'$MONGO_INITDB_OPLOG_USERNAME', privileges:[{resource: {db:'local', collection:'system.replset'}, actions: ['find']}], roles:[{role:'read', db:'local'}]});
EOF
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD<<EOF
use admin;
db.createUser({user:'$MONGO_INITDB_OPLOG_USERNAME', pwd:'$MONGO_INITDB_OPLOG_PASSWORD', roles:[{role: 'read', db: 'local'}]});
EOF
mongo -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD<<EOF
use admin;
db.runCommand({grantRolesToUser:'$MONGO_INITDB_OPLOG_USERNAME', roles:['$MONGO_INITDB_OPLOG_USERNAME']});
EOF

mongo -u root-admin -p 1Ta#ukB$ <<EOF
use admin;
var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongodb:27017",
        "priority": 1
      },
    ]
  };
rs.initiate(cfg);
EOF
else
    echo "MONGO_INITDB_ROOT_USERNAME,MONGO_INITDB_ROOT_PASSWORD,dbUser and dbPwd must be provided. Some of these are missing, hence exiting database and user creatioin"
    exit 403
fi






# echo init-mongo.sh time now: `date +"%T" `
# mongo --host localhost:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
#   var cfg = {
#     "_id": "rs0",
#     "version": 1,
#     "members": [
#       {
#         "_id": 0,
#         "host": "mongodb:27017",
#         "priority": 1
#       },
#     ]
#   };
#   rs.initiate(cfg);
# EOF


# mongo --host localhost:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
# use admin
# db.createUser({
#   user: "$MONGO_INITDB_USERNAME",
#   pwd: "$MONGO_INITDB_PASSWORD",
#   roles: [{ role: "readWrite", db: "$MONGO_INITDB_DATABASE" }]
# });
# db.runCommand({createRole:"oplogger", privileges:[{resource: {db:"$MONGO_INITDB_DATABASE", collection:"system.replset"}, actions: ["find"]}], roles:[{role:"read", db:"$MONGO_INITDB_DATABASE"}]});
# db.createUser({user:"oplogger", pwd:"", roles:[{role: "read", db: "local"}]})
# db.runCommand({grantRolesToUser:"oplogger", roles:["oplogger"]})
# EOF

# sh -c "mongo --host localhost:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD"


# mongo --host localhost:27017 -u ${MONGO_INITDB_ROOT_USERNAME} -p ${MONGO_INITDB_ROOT_PASSWORD} <<EOF
# use admin
# db.createUser({
#   user: "$MONGO_INITDB_USERNAME",
#   pwd: "$MONGO_INITDB_PASSWORD",
#   roles: [{ role: "readWrite", db: "$MONGO_INITDB_DATABASE" }]
# });
# EOF



  # use admin
  # db.createUser({
  #   user: '$MONGO_INITDB_USERNAME',
  #   pwd: '$MONGO_INITDB_PASSWORD',
  #   roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]
  # });


#!/usr/bin/env bash
# echo "Creating mongo users..."
# mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: '$MONGO_INITDB_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]});rs.initiate( { _id : 'rs0', members: [ { _id : 0, host : 'database-mongodb:27017' } ] } )"
# echo "Mongo users created."


# echo "sleeping for 1 seconds"
# sleep 1
# echo "MONGO_INITDB_ROOT_USERNAME $MONGO_INITDB_ROOT_USERNAME"
# echo "MONGO_INITDB_ROOT_PASSWORD $MONGO_INITDB_ROOT_PASSWORD"

# echo init-mongo.sh time now: `date +"%T" `
# mongo --host localhost:27017 -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
#   var cfg = {
#     "_id": "rs0",
#     "version": 1,
#     "members": [
#       {
#         "_id": 0,
#         "host": "mongodb:27017",
#         "priority": 1
#       },
#     ]
#   };
#   rs.initiate(cfg);
# EOF

  # use admin
  # db.createUser({
  #   user: '$MONGO_INITDB_USERNAME',
  #   pwd: '$MONGO_INITDB_PASSWORD',
  #   roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]
  # });


#!/usr/bin/env bash
# echo "Creating mongo users..."
# mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: '$MONGO_INITDB_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{role: 'readWrite', db: '$MONGO_INITDB_DATABASE'}]});rs.initiate( { _id : 'rs0', members: [ { _id : 0, host : 'database-mongodb:27017' } ] } )"
# echo "Mongo users created."