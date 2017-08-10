FROM node:8.0.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

EXPOSE 5000

# RUN apk add --no-cache git

WORKDIR /app

COPY . package.json

VOLUME /app/public/media

RUN npm i && npm run build

CMD node src/server/web.js
