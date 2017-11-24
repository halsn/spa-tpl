FROM node:8.9.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

EXPOSE 5000

# RUN apk add --no-cache git

WORKDIR /app

ADD . ./

VOLUME /app/public/media

RUN npm i && npm run build

CMD node /app/src/server/web.js
