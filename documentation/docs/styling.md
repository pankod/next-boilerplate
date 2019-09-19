---
id: styling
title: Styling
sidebar_label: Styling
---


Scss/Sass and styled-component are being used to style components. It's recommended to keep style files in the same directory with component's files and import it right from there when necessary.

Example:

 ```sh
├── src
│   ├── Components
│   │   ├── Heading
│   │   │   ├── index.spec.tsx
│   │   │   ├── index.tsx
│   │   │   ├── styled.ts   (styled-component)
│   │   │   └── style.scss  (scss/sass)
│   │   └── index.ts
```

You need to import style.scss or styled.ts depending your selection into Heading/index.tsx

```js
import './style.scss';
```
