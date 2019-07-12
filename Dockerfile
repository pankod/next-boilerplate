FROM node:12-alpine

RUN mkdir -p /opt/app
WORKDIR /app

ENV NODE_ENV production

WORKDIR /opt/app
COPY . /opt/app

RUN npm install --dev && npm run build

CMD [ "npm", "start" ]
