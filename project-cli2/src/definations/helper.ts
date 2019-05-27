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

	createFile: (dirPath: string): void => {
		fs.mkdirSync(path.resolve('', dirPath));
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

	addIndex: (params: DefinationsModel.IAddIndex): void => {
		fs.appendFile(
			path.resolve('', params.dirPath),
			`${params.getFileContent()}\n`,
			err => {
				if (err) throw err;
				console.log(logSymbols.success, params.message);
			}
		);
	},

	createInterface: (answers: DefinationsModel.IAnswers, isClass: boolean) => {
		const { fileName, lowerFileName, isPage, isConnectStore } = answers;
		const templatePath = './src/templates/interfaces/component.d.mustache';
		const templateProps = { fileName, isClass, lowerFileName, isConnectStore };
		const pageDirPath = `${Config.pageInterfaceDir}/${fileName}.d.ts`;
		const compDirPath = `${Config.compInterfaceDir}/${fileName}.d.ts`;
		const pageInterfaceIndex = './src/templates/interfaces/page-index.d.mustache';
		const compIntefaceIndex = './src/templates/interfaces/component-index.d.mustache';
		const storeInterface = './src/templates/interfaces/redux-store.d.mustache';
		const storeImportInterface = './src/templates/interfaces/redux-import.d.mustache';

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: isPage ? pageDirPath : compDirPath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Added new interface file'
		};

		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.interfaceDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.interfaceDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate(isPage ? pageInterfaceIndex : compIntefaceIndex, templateProps),
			message: 'Interface file added to Interfaces/index.ts',
			regexKey: isPage ? /...PAGE INTERFACES/g : /...COMPONENT INTERFACES/g
		};

		const replaceStoreParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.reduxInterfaceDir}/Store.d.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate(storeInterface, templateProps),
			message: 'Interface file added to Interfaces/Redux/Store.d.ts',
			regexKey: /export type IStore\s[=]\s[{]/g
		};


		Helper.writeFile(writeFileProps);
		Helper.replaceContent(replaceContentParams);

		if (isConnectStore) {

			Helper.replaceContent(replaceStoreParams);

			setTimeout(() => {
				const replaceStoreImportParams: DefinationsModel.IReplaceContent = {
					fileDir: `${Config.reduxInterfaceDir}/Store.d.ts`,
					filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
					getFileContent: () => Helper.getTemplate(storeImportInterface, templateProps),
					message: 'Interface file added to import section in Interfaces/Redux/Store.d.ts\n',
					regexKey: /\s[}] from '@Interfaces';/g
				};
				Helper.replaceContent(replaceStoreImportParams);
			}, 2000);

		}
	},

	createStyle: (answers: DefinationsModel.IAnswers): void => {
		const templatePath = './src/templates/styles.mustache';
		const templateProps = { fileName: answers.fileName };
		const pageDirPath = `${Config.pagesDir}/${answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase())}/style.scss`;
		const compDirPath = `${Config.componentsDir}/${answers.fileName}/style.scss`;

		const writeFileProps = {
			dirPath: answers.isPage ? pageDirPath : compDirPath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Added new style file'
		};

		Helper.writeFile(writeFileProps);
	},

	createFuncComponent: (answers: DefinationsModel.IAnswers): void => {
		const { lowerFileName, fileName, isHaveStyle } = answers;
		const funcDir = `${Config.componentsDir}/${answers.fileName}`;
		const templatePath = './src/templates/components/functional.mustache';
		const templateProps = {
			fileName,
			lowerFileName,
			interfaceName: `I${fileName}`,
			isHaveStyle
		};
		const indexTemplate = './src/templates/components/index.mustache';

		const addIndexParams: DefinationsModel.IAddIndex = {
			dirPath: `${Config.componentsDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Component added to index.ts.'
		};

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: `${funcDir}/index.tsx`,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Add new functional component.'
		};

		Helper.createFile(funcDir);
		Helper.writeFile(writeFileProps);
		Helper.addIndex(addIndexParams);
		Helper.createInterface(answers, false);
	}

};
