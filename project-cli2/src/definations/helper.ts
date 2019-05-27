import * as fs from 'fs';
import * as logSymbols from 'log-symbols';
import * as mustache from 'mustache';
import * as path from 'path';

import { DefinationsModel } from './Defination';

import { Config } from '../../config';

export const Helper = {

	isAlreadyExist: (startPath: string, val: string, isFile?: boolean): boolean => {
		val = val.replace(/\b\w/g, foo => foo.toUpperCase());

		const _path = isFile ? `${startPath}/${val}.txt` : `${startPath}/${val}`;

		return fs.existsSync(path.resolve('', _path));
	},

	getTemplate: (templatePath: string, templateProps: DefinationsModel.ITemplateProps): string => (

		mustache.render(
			fs.readFileSync(path.resolve('', templatePath), 'utf8'),
			templateProps
		)
	),

	writeFile: (params: DefinationsModel.IWriteFile) => {
		fs.writeFileSync(
			path.resolve('', params.dirPath),
			params.getFileContent()
		);
	},

	replaceContent: (params: DefinationsModel.IReplaceContent): void => {
		const replaceFile = params.filetoUpdate.replace(params.regexKey, params.getFileContent());

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: params.fileDir,
			getFileContent: () => replaceFile,
			message: params.message
		};

		Helper.writeFile(writeFileProps);
	},

	addToCollection: (params: DefinationsModel.IAddCollection): void => {
		const collectionPath = `${Config.filesDir}/collection.txt`;
		const collectionTemplatePath = './src/templates/collection.mustache';

		const replaceParams: DefinationsModel.IReplaceContent = {
			fileDir: collectionPath,
			filetoUpdate: fs.readFileSync(path.resolve('', collectionPath), 'utf8'),
			getFileContent: () => Helper.getTemplate(collectionTemplatePath, params.templateProps),
			message: 'New file added to collection.txt',
			regexKey: /This projects includes files which is specified at the below[.\n]/g
		};

		Helper.replaceContent(replaceParams);
	},

	createSimpleText: (answers: DefinationsModel.IAnswers, opt?: DefinationsModel.ICreateFileOptions) => {
		const templatePath = './src/templates/simpleText.mustache';

		const templateProps = {
			fileName: answers.fileName,
			isFileNameAdd: answers.isFileNameAdd
		};

		const simpleTextFilePath = `${Config.filesDir}/${answers.fileName}.txt`;

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: simpleTextFilePath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Created new file.\n\n'
		};

		Helper.writeFile(writeFileProps);
	},

	createNewAddCollecton: (answers: DefinationsModel.IAnswers, opt?: DefinationsModel.ICreateFileOptions) => {

		const templateProps = {
			fileName: answers.fileName,
			isCustomFileName: answers.isCustomFileName,
			isFileNameAdd: opt.isFileNameAdd,
			customFileName: opt.customFileName
		};

		Helper.createSimpleText(templateProps);

		const addCollParams = {
			templateProps
		};

		Helper.addToCollection(addCollParams);

	}

};
