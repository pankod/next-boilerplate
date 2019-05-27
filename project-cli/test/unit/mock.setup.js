const fs = require("memfs");

process.chdir('/');
fs.mkdirSync('/dir');
fs.writeFileSync('/dir/simpleText.mustache', 'Hello World! from simpleText.mustache');
fs.writeFileSync('/dir/collection.txt', 'Hello World! from collection.txt');
fs.writeFileSync('/dir/collection.mustache', 'Hello World! from collection.mustache');
fs.writeFileSync('/dir/Test1.txt', 'Hello World! from Test1.txt');

fs.mkdirSync('/src');
fs.mkdirSync('/src/templates');
fs.writeFileSync('/src/templates/simpleText.mustache', 'Hello World! from simpleText.mustache');
fs.writeFileSync('/src/templates/collection.mustache', 'Hello World! from collection.mustache');

fs.mkdirSync('/files');
fs.writeFileSync('/files/Test1.txt', 'Hello World! from Test1.txt');
fs.writeFileSync('/files/collection.txt', 'Hello World! from collection.txt');

jest.mock('fs', () => require('memfs'));