---
id: setup
title: Setup
---

1. Clone the repository and install the dependencies:

```sh
git clone https://github.com/pankod/next-boilerplate.git
```


2. To create a new app, go to the choosen app directory on the CLI then run one of the following methods:

**npm**

```sh
npm install
```
**yarn**

```sh
yarn install
```

3. Once the installation is done, you can run the following command:

 ```sh
 npm run start:dev
 ```
 <br/>

Then open http://localhost:3000/ to see your app.

```sh
.
├── app
│   ├── proxy.js
│   ├── routes.js
│   └── server.js
├── documentation
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── home
│   │   ├── index.scss
│   │   ├── index.spec.tsx
│   │   └── index.tsx
│   └── index.ts
├── project-cli
├── src
│   ├── Actions
│   │   ├── HomeActions.spec.tsx
│   │   ├── HomeActions.ts
│   │   └── index.ts
│   ├── Components
│   │   ├── Heading
│   │   │   ├── index.spec.tsx
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   └── index.ts
│   ├── Definations
│   │   ├── ActionConsts.ts
│   │   └── index.ts
│   ├── Interfaces
│   │   ├── Components
│   │   │   └── Heading.d.ts
│   │   ├── Pages
│   │   │   ├── App.d.ts
│   │   │   └── Home.d.ts
│   │   ├── Redux
│   │   │   ├── Action.d.ts
│   │   │   └── Store.d.ts
│   │   ├── Services
│   │   │   └── API
│   │   │       ├── Http.d.ts
│   │   │       └── Planetary
│   │   │           ├── ApodPayload.d.ts
│   │   │           ├── ApodResponse.d.ts
│   │   │           └── Planetary.d.ts
│   │   └── index.ts
│   ├── Redux
│   │   ├── Reducers
│   │   │   ├── home.spec.ts
│   │   │   ├── home.ts
│   │   │   └── index.ts
│   │   └── store.ts
│   └── Services
│       ├── API
│       │   ├── Http.spec.ts
│       │   ├── Http.ts
│       │   ├── Planetary.spec.ts
│       │   └── Planetary.ts
│       └── index.ts
├── tsconfig.json
├── tslint.json
├── jest.config.js
├── jest.setup.ts
├── jest.tsconfig.json
├── next.config.js
├── package-lock.json
└── package.json
```