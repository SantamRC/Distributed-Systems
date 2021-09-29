FROM node:16
WORKDIR /home/node/app
COPY Server /home/node/app
RUN npm install
CMD node index.js