#!/bin/bash

echo "################################## Run nginx"
echo "|| ----------- $BACKEND_SERVICE ----------- ||"
export DOLLAR='$'
envsubst '${BACKEND_SERVICE},${DOLLAR}' < ./src/nginx/nginx-conf/nginx.conf.template > /etc/nginx/nginx.conf # /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"