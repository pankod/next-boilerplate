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

## Bootstrap 4
Bootstrap is a free front-end framework for faster and easier web development
Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins

Bootstrap also gives you the ability to easily create responsive designs

We included Bootstrap 4 to next-boilerplate by default. You can just start using Bootstrap features without any configuration.

For any reason if you want to exclude Bootstrap from project follow the directions at the below.

- Remove bootstrap folder from  `static/css/bootstrap` directory.
- Delete `@import "./bootstrap/index"` line from   ` static/css/main.scss` file.
- Uninstall dependencies from package.json by  `npm uninstall bootstrap` command.






>Refer to [offical documentation](https://getbootstrap.com/docs/4.4/getting-started/introduction/) for detailed usage.