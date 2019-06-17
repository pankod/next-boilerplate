---
id: routing
title: Routing
sidebar_label: Routing
---


Routings are automatically handled by the Next.js. By default, Next.js will serve each file in /pages under a pathname matching the filename. Subfolders with index files under /pages directory are also supported and it's the prefered method in the boilerplate.
<br>


```
pages/index.ts
pages/home/index.tsx
pages/about/index.tsx
```


According to the above file structure, file names are defined as routes.

```sh
pages/index -> /
pages/about -> /about
pages/home  -> /home
```


You may add custom routings to your app by using the ```app/routes.js``` 
