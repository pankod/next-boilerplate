---
id: routing
title: Routing
sidebar_label: Routing
---


Next.js makes automatic routing according to the name of the files placed in the page folder due to its features.
<br>

```sh
├── pages
│   ├── about
│   ├── contact
│   ├── home
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.ts
```

According to the above file structure, file names are defined as routes.

```sh
pages/index -> /

pages/about -> /about

pages/home  -> /home
```


To define a custom url path, you can define the url with the desired route name in the ```app/routes``` folder.
