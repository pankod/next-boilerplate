---
id: setup
title: Setup
---
To create a new app, you may choose one of the following methods:
1. Clone the repository:

```sh
git clone https://github.com/pankod/next-boilerplate.git
```


2. Install the dependencies:

**npm**

```sh
npm install
```
**yarn**

```sh
yarn install
```

3. Start the development server:

 ```sh
 npm run start:dev
 ```

4. Launch http://localhost:3000


### Structure
After the setup is complete, your app should have the following directory structure:

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
│   ├── Definitions
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