---
id: routing
title: Routing
sidebar_label: Routing
---


Routing is automatically handled by the Next.js. By default, Next.js will serve each file in `/pages` with a pathname matching the filename. Subfolders with index files under `/pages` directory are also supported and it's the preferred way in the boilerplate.
<br>

```sh
pages/home/index.tsx
pages/{yourAwesomePage}/index.tsx
```

*According to the above directory structure, file and folder names are defined as routes.*
*Note that `/home` routes to `/` as default and can be changed in `server/routes.ts`*

```sh
pages/home -> / or /home
pages/{yourAwesomePage} -> /{yourAwesomePage}
```

You may add custom routings to your app by using the `server/routes.ts`
