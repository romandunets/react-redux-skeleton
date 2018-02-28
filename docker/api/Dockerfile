FROM node:8.9.4

WORKDIR /home/node/app
COPY package*.json /home/node/app/
COPY data /home/node/app/
RUN npm install

CMD npm run api
EXPOSE 3001
