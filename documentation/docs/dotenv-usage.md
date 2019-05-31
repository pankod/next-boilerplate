---
id: dotenv-usage
title: How can we use ?
sidebar_label: Usage
---

Kullanımı için client ve server olmak üzere iki mod var.


client: hem serverside hem client side erişebilirsin. 
Example: API_URL 

server: sadece server side erişilebilir. example: ANY_SECRET_TOKEN


Tanımlamalar .env dosyası içerisine yapılır.
Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```
API_KEY=test1234

```

Eğer unit test kullanıyorsanız aynı değişkeni .env.test dosyasına da eklemeniz gerekiyor.

.env dosyasına tanımlamalar yapıldıktan sonra next.config.js dosyasında withConfig e eklemeniz gerekli.

```
const withConfig = nextRuntimeDotenv({
	public: [
		'API_URL',
		'API_KEY'
	],
	server: [
	]
})
```

Eğer unit test yapıyorsanız jest.setup.js içerisinde setConfig methoduna eklemeniz gerekli.

```
setConfig({
	publicRuntimeConfig:
	{
		'API_URL': process.env.API_URL,
		'API_KEY': process.env.API_KEY
	}
})
```


Kod içerisinde kullanmak için:

```
import getConfig from 'next/config';

const { publicRuntimeConfig: { API_KEY, API_URL } } = getConfig();
````


server onyl config yapmak için, withConfig içinde, server arrayine pushlanır. 
okurken server runtime config içerisinden okunur


Dikkat,

.env dosyası sadece development sürecinde kullanılması gerekiyor. 
Production kullanımı için envrionment variable kullanılmalı (https://en.wikipedia.org/wiki/Environment_variable).

