FROM node:8.9.0-alpine
MAINTAINER Halsn <xuhalsn@gmail.com>

# RUN apk update && \
    # apk upgrade && \
    # apk add --no-cache git

EXPOSE 6000

WORKDIR /app

ADD src/server/ ./
ADD package.json ./

VOLUME /app/public/media

RUN npm i --prod

CMD node ./api.js
