---
id: dotenv-usage
title: Enviroment Variables(.env)
sidebar_label: Enviroment Variables
---



This boilerplate uses dotenv plugin to expose environment variables to the Next.js runtime configuration.

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.


There are two modes for use:

- client: You can access both client and server.
Example:  ```API_URL``` 

- server: Only serverside can access
Example: ```ANY_SECRET_TOKEN```

Add environment-specific variables on new lines in the form of NAME=VALUE in .env file.

```
API_KEY=test1234
```
 İf you use unit testing, you should add same variable into .env.test file.

 After defining keys in the .env file, you need to define the same keys into ```withConfig``` in the ```next.config.js``` file.
<br>

```
const withConfig = nextRuntimeDotenv({
	public: [
		'API_URL',
		'API_KEY'
	],
	server: [
		'ANY_SECRET_TOKEN'
	]
})
```
<br>
İf you use unit testing you should add keys to ```setConfig``` in ```jest.setup.js``` file.

```
setConfig({
	publicRuntimeConfig:
	{
		'API_URL': process.env.API_URL,
		'API_KEY': process.env.API_KEY
	},
	serverRuntimeConfig: {
		'ANY_SECRET_TOKEN': process.env.ANY_SECRET_TOKEN
	}
})
```
<br>
To use within in the code:

```
import getConfig from 'next/config';

const { publicRuntimeConfig: { API_KEY, API_URL },  serverRuntimeConfig: { ANY_SECRET_TOKEN } } = getConfig();
````

To use server only config you need to push the same keys to server array of  ```withConfig``` in the ```next.config.js``` file. Server 

To use server only config server onyl config yapmak için, withConfig içinde, server arrayine pushlanır. 
okurken server runtime config içerisinden okunur


Dikkat,

.env dosyası sadece development sürecinde kullanılması gerekiyor. 
Production kullanımı için envrionment variable kullanılmalı (https://en.wikipedia.org/wiki/Environment_variable).

