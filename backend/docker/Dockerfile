FROM node:alpine AS development

RUN apk update && apk add bash
RUN apk add --no-cache python
RUN apk add --no-cache --virtual builds-deps \
        build-base \
        make \
        g++ 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development && npm rebuild bcrypt --build-from-source

COPY . .

RUN npm run build