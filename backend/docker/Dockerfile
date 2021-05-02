# ------ IF THIS DOESN'T WORK USE THE OTHER ONE BELOW -------
# ------- there were some problems on AWS while deploying ------

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


# FROM node:alpine AS development

# RUN apk update && apk add bash
# RUN apk add --update --no-cache curl jq py3-configobj py3-pip py3-setuptools python3 python3-dev
# RUN apk add --update --no-cache py-pip
# RUN apk add --no-cache --virtual builds-deps \
#         build-base \
#         make \
#         g++

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=development && npm rebuild bcrypt --build-from-source

# COPY . .

# RUN npm run build