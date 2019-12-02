---
id: structure
title: Structure
sidebar_label: Structure
---

After the setup is complete, your app should have the following directory structure:

```sh
.
├── pages
│   ├── _app
│   │   └── index.tsx
│   ├── _document
│   │   └── index.tsx
│   ├── _error
│   │   └── index.tsx
│   └── home
│       └── index.tsx
├── server
│   ├── i18n.ts
│   ├── index.ts
│   ├── proxy.ts
│   └── routes.ts
├── src
│   ├── Actions
│   │   ├── HomeActions
│   │   │   ├── index.spec.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── Components
│   │   ├── Basic
│   │   │   ├── Button
│   │   │   │   ├── Button.d.ts
│   │   │   │   ├── index.spec.tsx
│   │   │   │   └── index.tsx
│   │   │   └── index.ts
│   │   ├── Footer
│   │   │   ├── Footer.d.ts
│   │   │   ├── index.spec.tsx
│   │   │   └── index.tsx
│   │   ├── Heading
│   │   │   ├── Heading.d.ts
│   │   │   ├── index.spec.tsx
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   ├── Layout
│   │   │   ├── Layout.d.ts
│   │   │   ├── index.spec.tsx
│   │   │   └── index.tsx
│   │   ├── LocaleButton
│   │   │   ├── LocaleButton.d.ts
│   │   │   ├── index.spec.tsx
│   │   │   └── index.tsx
│   │   ├── Navbar
│   │   │   ├── Navbar.d.ts
│   │   │   ├── index.spec.tsx
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── Definitions
│   │   ├── ActionConsts
│   │   │   ├── ActionConsts.ts
│   │   │   ├── index.spec.ts
│   │   │   └── index.ts
│   │   ├── Styled
│   │   │   ├── index.ts
│   │   │   └── theme.ts
│   │   └── index.ts
│   ├── Interfaces
│   │   ├── Pages
│   │   │   ├── App.d.ts
│   │   │   ├── Error.d.ts
│   │   │   └── Home.d.ts
│   │   ├── index.ts
│   │   └── styled.d.ts
│   ├── Redux
│   │   ├── IAction.d.ts
│   │   ├── IStore.d.ts
│   │   ├── Reducers
│   │   │   ├── home
│   │   │   │   ├── index.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── store.ts
│   ├── Services
│   │   ├── API
│   │   │   ├── Http
│   │   │   │   ├── Http.d.ts
│   │   │   │   ├── index.spec.ts
│   │   │   │   └── index.ts
│   │   │   └── Planetary
│   │   │       ├── ApodPayload.d.ts
│   │   │       ├── ApodResponse.d.ts
│   │   │       ├── Planetary.d.ts
│   │   │       ├── index.spec.ts
│   │   │       └── index.ts
│   │   └── index.ts
│   └── Styled
│       └── Home.ts
├── static
│   ├── css
│   │   └── reset.scss
│   ├── images
│   │   └── pankod-logo.png
│   └── locales
│       ├── en
│       │   └── common.json
│       ├── es
│       │   └── common.json
│       └── tr
│           └── common.json
├── test
│   ├── jest.setup.ts
│   └── mocks.ts
├── .babelrc
├── .dockerignore
├── .env.example
├── .env.test
├── .eslintrc.json
├── .prettierrc.js
├── .travis.yml
├── banner.jpg
├── boilerplate-cli.gif
├── Dockerfile
├── global.d.ts
├── jest.config.js
├── LICENSE
├── next-env.d.ts
├── next.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.jest.json
├── tsconfig.json
└── tsconfig.server.json
```
