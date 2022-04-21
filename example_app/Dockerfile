FROM node:lts-slim

RUN apt-get update && apt-get install -y wget gnupg curl 

# https://classic.yarnpkg.com/en/docs/install#debian-stable
RUN curl https://deb.nodesource.com/setup_lts.x | bash
RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json yarn.lock ./
RUN yarn install

COPY . /usr/src/app