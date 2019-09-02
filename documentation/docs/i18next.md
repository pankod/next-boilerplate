---
id: i18next
title: i18next
sidebar_label: i18next
---

i18next is a very popular internationalization framework for browser or any other javascript environment. You can translate your app to any predefined language.


The translations of custom text messsages will be stored for each language in a separate directory.

Organize your translations as such:
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

If you want to add a new language files you should:
 - Add filename to namespaces array in `src/Services/withI18next.ts`.

``` 
export const withI18next = (namespaces = ['common']) => () => {}
```
- Add folder and filename to server objects ns and whitelist config in `app/i18n/i18next.config.js`
 ```js
	server: 
		ns: ['common'],
		whitelist: ['en', 'es', 'tr'],
	}
 ```


### Use i18next functions in components

In the next step we have to wrap the components with `withI18next` function, which automatically adds the `t()` and `changeLanguage` function to the properties of a component. 

You have to specify the namespace(translation file name) to `withI18next` function.

Example usage in `pages/home` directory.

```js
const Extended = withI18next(['common'])(HomePage);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Extended);
```




### Changing current language

Use `changeLanguage` method of i18n to set current language and trigger the language change manually. i18n methods passed to pages as a props.

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



