FROM node:8.0.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

RUN echo "Asia/Shanghai" > /etc/timezone

# RUN apk update && \
    # apk upgrade && \
    # apk add --no-cache git

EXPOSE 6000

WORKDIR /app

ADD . ./

VOLUME /app/public/media

RUN npm i --prod

CMD node src/server/api.js
