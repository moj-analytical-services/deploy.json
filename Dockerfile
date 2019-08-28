FROM node:lts-alpine

ADD package.json .
ADD yarn.lock .
RUN yarn install
ADD . .

CMD yarn start
