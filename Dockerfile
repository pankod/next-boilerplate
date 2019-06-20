FROM node:alpine

RUN mkdir -p /opt/app
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /opt/app
COPY . /opt/app

RUN npm install --dev && npm run build

CMD [ "npm", "start" ]