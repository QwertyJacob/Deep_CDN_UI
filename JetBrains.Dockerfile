# Created by WebStorm
FROM node:latest
WORKDIR /tmp/project_modules
COPY package.json /tmp/project_modules/package.json
RUN npm install .
RUN npm install -g browserify
RUN browserify /publicjavascripts kafkaclient.js -o bunble.js
COPY start.sh /tmp/project_modules/start.sh