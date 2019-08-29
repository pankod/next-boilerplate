---
id: i18next
title: i18n Internationalization Framework
sidebar_label: i18next
---



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

For each translation folder create a json file and define translations with key value pairs.

We already added a common.json file for boilerplate translations example. 

### Add new translation language

If you want to add a new language files you should:
 - Add filename to namespaces array in `src/Services/withI18next.ts`.

``` 
export const withI18next = (namespaces = ['common']) => () => {}
```
- Add folder and filenames to server object ns and whitelist config in `app/i18n/i18next.config.js`
 ```js
	server: {
		ns: ['common'],
		whitelist: ['en', 'es', 'tr'],
	}
 ```

 - Add file names to  resources in `app/i18n/i18nForTests.js`.

 ```js
 i18n.init({
	resources: {
		en: {},
		es: {},
		tr: {},
	}
});
```

### Changing current language

Use `changeLanguage` method of i18n to change current language.

```
this.props.i18n.changeLanguage('es');
```

`t()` function will return value in set language.

You can specify key as a String. It resolves key-value pair from language json file in locales folder will be returned.

```
<Heading text={t('common:World')} />
```

