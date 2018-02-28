FROM node:8.9.4

WORKDIR /tmp
COPY package*.json /tmp/
RUN npm install

WORKDIR /home/node/app
CMD cp -rf /tmp/node_modules /home/node/app && npm start

EXPOSE 3000
