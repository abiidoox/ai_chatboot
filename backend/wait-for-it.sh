#!/bin/bash
# wait-for-it.sh script to wait for the ollama service to be ready

# Usage: ./wait-for-it.sh <host>:<port> -- <command to run>
HOST=$1
PORT=$2
shift 2

while ! nc -z $HOST $PORT; do
  echo "Waiting for $HOST:$PORT to be ready..."
  sleep 2
done

echo "$HOST:$PORT is ready!"
exec "$@"
