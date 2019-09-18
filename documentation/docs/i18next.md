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
 - Add filename to namespaces array in `src/Services/withI18next.ts`.

``` 
export const withI18next = (namespaces = ['common']) => () => {}
```
- Add folder and filename to server object's ns and whitelist config in `app/i18n/i18next.config.js`
 ```js
	server: 
		ns: ['common'],
		whitelist: ['en', 'es', 'tr'],
	}
 ```


### Use i18next functions in components

In the next step we have to wrap the components with `withI18next` function, which automatically passes the `t()` and `changeLanguage()` functions to the properties of the components.

You have to specify the namespace(*translation file name*) to `withI18next` function.

Example usage in `pages/home` directory.

```js
const Extended = withI18next(['common'])(HomePage);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Extended);
```




### Changing current language

Use `changeLanguage()` method of i18n to set current language and trigger the language change manually. i18n methods passed into pages as props.

```
this.props.i18n.changeLanguage('es');
```

`t()` function can be used to fetch the translation.


You can specify key as a String. It resolves key-value pair from language json file in locales folder and returns value as a string.

Translations can be accessed using keys like:

```
<Heading text={t('common:World')} />
```



<br>
>Refer to [offical documentation](https://www.i18next.com) for detailed usage.



