
<img src="banner.jpg" alt="Performance oriented Next.js application boilerplate with Redux, Typescript, Express.js and Sass." align="center" />

<br/>
<div align="center" >Performance oriented Next.js application boilerplate with Redux, Typescript, Express.js and Sass.</div>
<br/>

<div align="center">
  <!-- CodeClimate -->
  <a href="https://codeclimate.com/github/pankod/next-boilerplate/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
  </a>
  <!-- CodeCoverave -->
  <a href="https://codeclimate.com/github/pankod/next-boilerplate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/test_coverage" /></a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/pankod/next-boilerplate">
    <img src="https://travis-ci.org/pankod/next-boilerplate.svg?branch=master" alt="Build Status" />
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/pankod/next-boilerplate">
    <img src="https://david-dm.org/pankod/next-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/pankod/next-boilerplate#info=devDependencies"> 
    <img src="https://david-dm.org/pankod/next-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
</div>


<br/>
<div align="center">
  <sub>Created by <a href="https://www.pankod.com">Pankod</a></sub>
</div>



## About


Next.js is a minimalistic React framework that runs in the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating it is also a straightforward way for developers with React experience to get productive fast.

The advantages of this approach is to be able to create Rich User experiences in a uniform way, without compromising Search Engine Optimisation (SEO) factors that are key to good ranking on Google and other search engines. 

This boilerplate make it easier to get started with a well-structured Next.js and TypeScript application.

By the end of setup, you'll have a Next.js project and features which is specified at the below.

<br/>

## Features


This boilerplate includes the latest powerfull tools.

* **Next.js** - Minimalistic framework for server-rendered React applications.
* **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces. path support(allias)
* **Redux** - State management
* **Express.js**- Handles server-side rendering and integrated with Express.js
* **Built-in Project CLI**- Create pages, components, actions, reducers with one command by using built-in cli.
* **Sass/Scss** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
* **Babel** -  The compiler for next generation JavaScript. Module(alias) support 
* **Eslint** - The pluggable linting utility.
* **Reverse Proxy** - A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server
* **Bundler Analyzer** - Visualize size of webpack output files with an interactive zoomable treemap.
* **dotenv .config** - Expose environment variables to the runtime config of Next.js
* **Jest** - Javascript testing framework , created by developers who created react
* **Enzyme** - JavaScript testing utility for React that makes it easier to test your React Components output.


<br/>

*Here are a few highlights to look out for in this boilerplate*

<dl>
  
  <dd>The boilerplate includes tsconfig.json which contains a list of your input files as well as all your compilation settings.<dd>

  >One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

 
  <dd>Includes babel-plugin-module-resolver <dd>

  >A Babel plugin to add a new resolver for your modules when compiling your code using Babel. This plugin allows you to add new "root" directories that contain your modules. It also allows you to setup a custom alias for directories, specific files, or even other npm modules.

  
  <dd>Includes next-runtime-dotenv <dd>

  >Normally, .env isn’t available in the browsers (only Node.js), but our boilerplate uses npm package for make it available.

  <dd>Includes jest and enzyme <dd>

  > Jest was created by Facebook and is a testing framework to test javascript and React code. Together with Airbnb’s Enzyme, which is a testing utility, makes it the perfect match to easily test your React application.
  

</dl>

<br/>

## Getting Started


1. Clone the repository and install the dependencies:

```
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

 ```
 npm run start:dev
 ```
 <br/>

Then open http://localhost:3000/ to see your app.

<br/>


## Built-in CLI


<div>
 <img width="600" src="./boilerplate-cli.gif" >
</div>
<br/>
<br/>

Pankod boilerplate is shipped with a CLI tool to streamline the creation of new components. By using the CLI tool, you may easily add pages, class components or functional components to your project and have all the required actions, reducers and imports are automatically created for you.
<br />

To start the CLI, you may run the following npm command:

```
npm run cli
```

After starting, an interactive menu will let you configure the component the be created. Firstly, you'll be asked for the type of the component whether it's a page, functional component or class component. Then you'll be prompted with the other options relevant to your selection of the component type.

For example, let's go through the steps of the creation of a new page component.

>Enter page name

 - Enter the desired filename for the page. Spaces are not allowed!
 - The tool will check for the existing filenames in the project and reject if found any.
 - The interface files are going to be created under Interfaces/Pages directory.

>Do you want to add custom route or use default route name?,

- You can define custom route for page which is specified in app/routes.js
- It will set filename as a route to if you don't want to add custom route.

>Do you want to have a connection to store?

If you choose yes, the following store connection methods and imports are generated:

- mapStateToProps & mapDispatchToProps methods and some imports in page component file,
- An action file in the Actions folder,
- An action constants in Definitions/ActionConsts.ts,
- An action file to Actions/index.ts,
- A Store interface file.

>Do you want to create a new reducer or use your own?

- If you choose yes, a new reducer file for page is created in src/Redux/Reducers directory and combineReducers are added to index.ts

>Do you want to add a style file?

- If you choose yes, a style.scss file is created in to same directory with page the component.


After answering questions it generates files in miliseconds.

<br/>

## Tree

 ***At this point, your project layout should look like this:***
 
 <br/>

```
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
├── eslintrc.js
├── .prettierrc
├── tsconfig.json
├── jest.config.js
├── jest.setup.ts
├── jest.tsconfig.json
├── next.config.js
├── package-lock.json
└── package.json

```
 

## License

Licensed under the MIT License, Copyright © 2018-present Pankod
