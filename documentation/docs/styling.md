---
id: styling
title: Styling
sidebar_label: Styling
---


The boilerplate uses Sass/Scss for styling components. You should map style file with component by importing it.

Example:


 ```sh
├── src
│   ├── Components
│   │   ├── Heading
│   │   │   ├── index.spec.tsx
│   │   │   ├── index.tsx
│   │   │   └── style.scss
│   │   └── index.ts
```


You need to import style.scss in to Heading/index.tsx
```js
import './style.scss';
```
