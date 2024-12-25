FROM node:20-alpine

WORKDIR /frontend

COPY package.json /frontend

COPY . /frontend

RUN npm install

CMD [ "npm", "start" ]