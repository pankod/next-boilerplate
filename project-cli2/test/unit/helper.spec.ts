
import { Config } from '../../config';
import { DefinationsModel } from '../../src/definations/Defination';
import { Helper } from '../../src/definations/helper';
import * as path from 'path';

describe('Test Helper constructor', () => {

	 test('getTemplate method', () => {
		const templatePath = `${Config.mockDir}/simpleText.mustache`;

		const templateProps = {
			fileName: 'collection'
		};

		const result = Helper.getTemplate(templatePath, templateProps);

		expect(result).not.toEqual('');
	});

	test('writeFile method', () => {
		const templatePath =  `${Config.mockDir}/simpleText.mustache`;

		const templateProps = {
			fileName: 'Test'
		};

		const simpleTextFilePath = `${Config.mockDir}/Test.txt`;

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: simpleTextFilePath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Created new file.'
		};

		Helper.writeFile(writeFileProps);

	});

	test('isAlreadyExist method', () => {
		const params = {
			isFile: true,
			startPath: Config.mockDir,
			val: 'test'
		};

		const result = Helper.isAlreadyExist(params.startPath, params.val, params.isFile);
		expect(result).toBeTruthy();
	});

	test('isAlreadyExist method (case: !isFile)', () => {
		const params = {
			isFile: false,
			startPath: Config.mockDir,
			val: 'test'
		};

		const result = Helper.isAlreadyExist(params.startPath, params.val, params.isFile);
		expect(result).toBeFalsy();
	});

	test('replaceContent method', () => {
		const fs = require("memfs");

		const collectionPath = `${Config.mockDir}/collection.txt`;
		const collectionTemplatePath = `${Config.mockDir}/collection.mustache`;

		const templateProps = {
			fileName: 'collection.mustache'
		};

		const replaceParams: DefinationsModel.IReplaceContent = {
			fileDir: collectionPath,
			filetoUpdate: fs.readFileSync(path.resolve('', collectionPath), 'utf8'),
			getFileContent: () => Helper.getTemplate(collectionTemplatePath, templateProps),
			message: 'New file added to collection.txt',
			regexKey: /Hello World! from collection.txt/g
		};

		Helper.replaceContent(replaceParams);

		const result = Helper.getTemplate(collectionPath, templateProps);
		const expectedResult = 'Hello World! from collection.mustache';

		expect(result).toEqual(expectedResult);
	});

	test('createSimpleText method', () => {

		const templateProps = {
			fileName: 'Test1',
			isCustomFileName: false,
			isFileNameAdd: false,
			customFileName: ''
		};

		Helper.createSimpleText(templateProps);

		const isExistParams = {
			isFile: true,
			startPath: Config.mockFilesDir,
			val: 'test1'
		};

		const result = Helper.isAlreadyExist(isExistParams.startPath, isExistParams.val, isExistParams.isFile);
		expect(result).toBeTruthy();
	});

	 test('addToCollection method', () => {

		const templateProps = {
			fileName: 'Test1',
			isCustomFileName: false,
			isFileNameAdd: false,
			customFileName: ''
		};

		const addCollParams = {
			templateProps
		};
	
		Helper.addToCollection(addCollParams);

		const collectionPath = `${Config.mockFilesDir}/collection.txt`;
		const result = Helper.getTemplate(collectionPath, templateProps);
		const expectedResult = 'Hello World! from collection.txt';

		expect(result).toEqual(expectedResult);
	});

	test('createNewAddCollecton method', () => {		
		const answers: DefinationsModel.IAnswers = { 
			fileName: 'Test1', 
			isCustomFileName: false,
			isFileNameAdd: true
		};

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());

		const opt: DefinationsModel.ICreateFileOptions = {
			isCustomFileName: false,
			isFileNameAdd: true
		};

		if (answers.isCustomFileName) {
			opt.customFileName = answers.customFileName;
		}

		Helper.createNewAddCollecton(answers, opt);

		const isExistParams = {
			isFile: true,
			startPath: Config.mockFilesDir,
			val: 'test1'
		};

		const result = Helper.isAlreadyExist(isExistParams.startPath, isExistParams.val, isExistParams.isFile);

		expect(result).toBeTruthy();

	});
});
