FROM node:8.9.1-stretch

RUN sed -i s@archive.ubuntu.com@mirrors.aliyun.com@g /etc/apt/sources.list && sed -i s@deb.debian.org@mirrors.aliyun.com@g /etc/apt/sources.list && sed -i s@security.ubuntu.com@mirrors.aliyun.com@g /etc/apt/sources.list
RUN apt-get update;apt-get install -y curl
RUN apt-get install -y wget make g++
COPY package.json /app/package.json
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org && \
    npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver && \
    npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ && \
    npm install
ADD . /app
RUN npm config set registry https://registry.npm.taobao.org && \
    npm install
CMD npm run dev