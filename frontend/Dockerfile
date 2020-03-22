FROM node:12-alpine

# ensure apk is up-to-date and add yarn
RUN apk update && apk add yarn

WORKDIR /usr/src/app

# copy dependency info over and install them all
# NOTE: yarn.lock won't exist on initial build but should be committed to git
COPY package.json yarn.lock* ./
RUN yarn install

# copy the code last to maximize caching
COPY . .