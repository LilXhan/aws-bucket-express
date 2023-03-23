FROM node:18-bullseye

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . /usr/src/app/
