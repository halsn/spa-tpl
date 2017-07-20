FROM node:7.10.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

ENV FOO="bar"

EXPOSE 8000

WORKDIR /app

ADD . ./

VOLUME /app/public/media

RUN npm i && npm build

CMD npm start
