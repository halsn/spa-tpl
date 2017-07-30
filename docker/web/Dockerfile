FROM node:8.0.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

EXPOSE 5000

RUN apk update && \
    apk upgrade && \
    apk add --no-cache git

WORKDIR /app

ADD . ./

VOLUME /app/public/media

RUN npm i && npm build

CMD node src/server/web.js
