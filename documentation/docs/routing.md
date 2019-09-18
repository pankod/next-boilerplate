---
id: routing
title: Routing
sidebar_label: Routing
---


Routing is automatically handled by the Next.js. By default, Next.js will serve each file in `/pages` with a pathname matching the filename. Subfolders with index files under `/pages` directory are also supported and it's the preferred method in the boilerplate.
<br>

```
pages/index.ts
pages/home/index.tsx
pages/about/index.tsx
```

*According to the above directory structure, file and folder names are defined as routes.*

```sh
pages/index -> /
pages/about -> /about
pages/home  -> /home
```

You may add custom routings to your app by using the `app/routes.js`
