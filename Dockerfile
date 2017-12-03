FROM ubuntu:latest

RUN sed -i s@archive.ubuntu.com@mirrors.aliyun.com@g /etc/apt/sources.list && sed -i s@deb.debian.org@mirrors.aliyun.com@g /etc/apt/sources.list && sed -i s@security.ubuntu.com@mirrors.aliyun.com@g /etc/apt/sources.list
RUN apt update;apt install -y curl
RUN curl curl -sL https://deb.nodesource.com/setup_8.x | bash - &&  apt-get install -y nodejs
RUN apt install -y wget make g++
RUN wget http://101.96.10.24/ftp.cn.debian.org/debian/pool/main/libp/libpng/libpng12-0_1.2.50-2+deb8u3_amd64.deb; dpkg -i libpng12-0_1.2.50-2+deb8u3_amd64.deb
ADD . /app
WORKDIR /app
RUN npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
RUN wget https://npm.taobao.org/mirrors/node-sass/v4.7.2/linux-x64-48_binding.node && npm i node-sass --sass_binary_path=linux-x64-48_binding.node
RUN npm config set registry https://registry.npm.taobao.org && \
    npm install
CMD npm run dev
