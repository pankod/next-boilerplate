---
id: i18next
title: Internationalization Framework
sidebar_label: Internationalization Framework
---

i18next is a very popular internationalization framework for browser or any other javascript environments. You can translate your app to any predefined language.

The translations of custom text messsages will be stored in each language's own separate folder.

Organize your translations such as:

```sh
.
└── static
    └── locales
        ├── en
        |   └── common.json
        ├── tr
        |   └── common.json
        └── es
            └── common.json
```

For each translation folder create a json file and define translations with key-value pairs.

We already added a common.json file for boilerplate translation example.

### Add new translation language

If you want to add a new language file you should:

- Create a new translation file in `static/locales/{newlang}/common.json`. *You can duplicate existing one and rename after making appropriate changes.*
- Add a key for the language into `otherLanguages` array in `server/i18n.ts`.

> Make sure both folder and key names are the same.

``` js
const NextI18NextInstance = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ["es", "tr"],
});
```

### Use i18next functions in components

In the next step we have to wrap the components with `withTranslation` function, which automatically passes the `t()` and `changeLanguage()` functions to the properties of the components.

You have to specify the namespace(*translation file name*) to `withTranslation` function.

Example usage in `pages/home` directory.

```js
const Extended = withTranslation(['common'])(HomePage);
```

### Changing current language

Use `changeLanguage()` method of i18n to set current language and trigger the language change manually. i18n methods passed into pages as props.

```js
this.props.i18n.changeLanguage('es');
```

`t()` function can be used to fetch the translation.

You can specify key as a String. It resolves key-value pair from language json file in locales folder and returns value as a string.

Translations can be accessed using `<filename>:<key>` like:

```jsx
<Heading text={t('common:World')} />
```

<br>
>Refer to [offical documentation](https://www.i18next.com) for detailed usage.
