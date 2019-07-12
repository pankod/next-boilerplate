/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * transformToUpperCamelCase('Foo Bar')
 * // => 'FooBar'
 *
 * transformToUpperCamelCase('--foo-bar--')
 * // => 'FooBar'
 *
 * transformToUpperCamelCase('__FOO_BAR__')
 * // => 'FooBar'
 */
export const transformToUpperCamelCase = (string: string): string => {
	return getOnlyWords(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => {
		word = word.toLowerCase();
		return result + upperFirst(word);
	}, '');
};

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * transformToKebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * transformToKebabCase('fooBar')
 * // => 'foo-bar'
 *
 * transformToKebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
export const transformToKebabCase = (string: string): string => {
	return getOnlyWords(`${string}`.replace(/['\u2019]/g, '')).reduce(
		(result, word, index) => result + (index ? '-' : '') + word.toLowerCase(),
		'',
	);
};

/**
 * Splits `string` into an array of its words.
 *
 * @param {string} [string=''] The string to inspect.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * getOnlyWords('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 */
export const getOnlyWords = (string: string): Array<string> => {
	return string.replace(/[^a-zA-Z0-9 ]/g, '').split(/\s+/);
};

/**
 * Converts the first character of `string` to upper case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
export const upperFirst = (string: string): string => {
	return string[0].toUpperCase() + string.substr(1, string.length);
};
