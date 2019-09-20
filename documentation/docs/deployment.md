---
id: deployment
title: Deployment
sidebar_label: Deployment
---

## Build

Builds the app for production to the build folder.
```
npm run build
```

``` 
npm run start
```





## Docker

Dockerfile is already included in project.

```
FROM node:alpine

RUN mkdir -p /opt/app
WORKDIR /app

ENV NODE_ENV production

WORKDIR /opt/app
COPY . /opt/app

RUN npm install --dev && npm run build

CMD [ "npm", "start" ]
```

You should create a docker image from Dockerfile.

```
docker build .
```

To start a container from image run the following command:

``` 
docker run -p 3000:3000 <image_id>
```

*This runs the container and maps **port 3000** to **host port 3000**.*

The app will be up and running on docker container at **localhost:3000**.