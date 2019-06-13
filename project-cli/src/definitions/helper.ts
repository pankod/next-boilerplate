import * as fs from 'fs';
import * as logSymbols from 'log-symbols';
import * as mustache from 'mustache';
import * as path from 'path';

import { DefinitionsModel } from './Definition';

import { Config } from '../../config';

export const Helper = {
	addRoute: (answers: DefinitionsModel.IAnswers) => {
		const { isHavePath, routePath, fileName } = answers;
		const templateProps = {
			fileName: fileName.replace(/\b\w/g, foo => foo.toLowerCase()),
			isHavePath,
			routePath
		};

		const replaceContentParams: DefinitionsModel.IReplaceContent = {
			fileDir: `${Config.routesDir}/routes.js`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.routesDir}/routes.js`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./project-cli/src/templates/routes.mustache', templateProps),
			message: `Route added to routes.js as ${isHavePath ? `'/${routePath}'` : `'/${fileName}/index'`}`,
			regexKey: /^(?:[\t ]*(?:\r?\n|\r))+module.exports = routes;/gm
		};

		Helper.replaceContent(replaceContentParams);
	},

	isAlreadyExist: (startPath: string, val: string, isFile?: boolean): boolean => {
		val = val.replace(/\b\w/g, foo => foo.toUpperCase());

		const _path = isFile ? `${startPath}/${val}.txt` : `${startPath}/${val}`;

		return fs.existsSync(path.resolve('', _path));
	},

	getTemplate: (templatePath: string, templateProps: DefinitionsModel.ITemplateProps): string => (

		mustache.render(
			fs.readFileSync(path.resolve('', templatePath), 'utf8'),
			templateProps
		)
	),

	writeFile: (params: DefinitionsModel.IWriteFile) => {
		fs.writeFileSync(
			path.resolve('', params.dirPath),
			params.getFileContent()
		);
	},

	createFile: (dirPath: string): void => {
		fs.mkdirSync(path.resolve('', dirPath));
	},

	replaceContent: (params: DefinitionsModel.IReplaceContent): void => {
		const replaceFile = params.filetoUpdate.replace(params.regexKey, params.getFileContent());

		const writeFileProps: DefinitionsModel.IWriteFile = {
			dirPath: params.fileDir,
			getFileContent: () => replaceFile,
			message: params.message
		};

		Helper.writeFile(writeFileProps);
	},

	addIndex: (params: DefinitionsModel.IAddIndex): void => {
		fs.appendFile(
			path.resolve('', params.dirPath),
			`${params.getFileContent()}\n`,
			err => {
				if (err) throw err;
				console.log(logSymbols.success, params.message);
			}
		);
	},

	createInterface: (answers: DefinitionsModel.IAnswers, isClass: boolean) => {
		const { fileName, lowerFileName, isPage, isConnectStore } = answers;
		const templatePath = './project-cli/src/templates/interfaces/component.d.mustache';
		const templateProps = { fileName, isClass, lowerFileName, isConnectStore };
		const pageDirPath = `${Config.pageInterfaceDir}/${fileName}.d.ts`;
		const compDirPath = `${Config.compInterfaceDir}/${fileName}.d.ts`;
		const pageInterfaceIndex = './project-cli/src/templates/interfaces/page-index.d.mustache';
		const compIntefaceIndex = './project-cli/src/templates/interfaces/component-index.d.mustache';
		const storeInterface = './project-cli/src/templates/interfaces/redux-store.d.mustache';
		const storeImportInterface = './project-cli/src/templates/interfaces/redux-import.d.mustache';

		const writeFileProps: DefinitionsModel.IWriteFile = {
			dirPath: isPage ? pageDirPath : compDirPath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Added new interface file'
		};

		const replaceContentParams: DefinitionsModel.IReplaceContent = {
			fileDir: `${Config.interfaceDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.interfaceDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate(isPage ? pageInterfaceIndex : compIntefaceIndex, templateProps),
			message: 'Interface file added to Interfaces/index.ts',
			regexKey: isPage ? /...PAGE INTERFACES/g : /...COMPONENT INTERFACES/g
		};

		const replaceStoreParams: DefinitionsModel.IReplaceContent = {
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
				const replaceStoreImportParams: DefinitionsModel.IReplaceContent = {
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

	createStyle: (answers: DefinitionsModel.IAnswers): void => {
		const templatePath = './project-cli/src/templates/styles.mustache';
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

	addActionConstIndex: (templateProps: DefinitionsModel.ITemplateProps): void => {
		const replaceContentParams: DefinitionsModel.IReplaceContent = {
			fileDir: `${Config.definitionsDir}/ActionConsts.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.definitionsDir}/ActionConsts.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./project-cli/src/templates/reducers/action-const.mustache', templateProps),
			message: 'Action constants added to Definitions/ActionConsts.ts',
			regexKey: /export const ActionConsts\s[=]\s[{]/g
		};

		Helper.replaceContent(replaceContentParams);
	},

	addReducerCombine: (templateProps: DefinitionsModel.ITemplateProps): void => {
		const replaceContentParams: DefinitionsModel.IReplaceContent = {
			fileDir: `${Config.reducerDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./project-cli/src/templates/reducers/store.mustache', templateProps),
			message: 'Reducer file added combineReducers in Redux/Reducers/index.ts',
			regexKey: /export default combineReducers[(][{]/g
		};

		Helper.replaceContent(replaceContentParams);
	},

	addAction: (answers: DefinitionsModel.IAnswers): void => {
		const { fileName } = answers;
		const actionFileDir = `${Config.actionDir}/${fileName}Actions.ts`;
		const actionTemplate = './project-cli/src/templates/reducers/action.mustache';
		const indexTemplate = './project-cli/src/templates/reducers/action-index.mustache';
		const templateProps = { fileName };

		const writeFileProps: DefinitionsModel.IWriteFile = {
			dirPath: actionFileDir,
			getFileContent: () => Helper.getTemplate(actionTemplate, templateProps),
			message: 'Added new action file'
		};

		const addIndexParams: DefinitionsModel.IAddIndex = {
			dirPath: `${Config.actionDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Added action file to index.ts Actions/index.ts'
		};

		Helper.addIndex(addIndexParams);

		Helper.writeFile(writeFileProps);
	},

	addReducer: (answers: DefinitionsModel.IAnswers): void => {
		const { fileName, lowerFileName, isConnectStore } = answers;

		const reducerFileDir = `${Config.reducerDir}/${lowerFileName}.ts`;
		const reducerTemplate = './project-cli/src/templates/reducers/reducer.mustache';
		const templateProps = { fileName, lowerFileName };

		const replaceContentParams: DefinitionsModel.IReplaceContent = {
			fileDir: `${Config.reducerDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./project-cli/src/templates/reducers/index.mustache', templateProps),
			message: 'Reducer added to Redux/Reducers/index.ts',
			regexKey: /import { combineReducers } from 'redux';/g
		};

		const writeFileProps: DefinitionsModel.IWriteFile = {
			dirPath: reducerFileDir,
			getFileContent: () => Helper.getTemplate(reducerTemplate, templateProps),
			message: 'Added new reducer file'
		};

		Helper.writeFile(writeFileProps);
		Helper.replaceContent(replaceContentParams);
		Helper.addReducerCombine(templateProps);

		if (isConnectStore) {
			Helper.addActionConstIndex(templateProps);
		}
	},

	createClassComponent: (answers: DefinitionsModel.IAnswers): void => {

		const { lowerFileName, isConnectStore } = answers;
		const pagesDir = `${Config.pagesDir}/${lowerFileName}`;
		const classDir = answers.isPage ? pagesDir : `${Config.componentsDir}/${answers.fileName}`;
		const templatePath = './project-cli/src/templates/components/class.mustache';
		const templateProps = {
			fileName: answers.fileName,
			interfaceName: `I${answers.fileName}`,
			isConnectStore: answers.isConnectStore,
			isHaveStyle: answers.isHaveStyle,
			lowerFileName: answers.lowerFileName
		};
		const indexTemplate = './project-cli/src/templates/components/index.mustache';

		const addIndexParams: DefinitionsModel.IAddIndex = {
			dirPath: `${Config.componentsDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Component added to index.ts'
		};

		const writeFileProps: DefinitionsModel.IWriteFile = {
			dirPath: `${classDir}/index.tsx`,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Added new class component'
		};

		Helper.createFile(classDir);
		Helper.writeFile(writeFileProps);
		Helper.createInterface(answers, true);

		if (isConnectStore) {
			Helper.addReducer(templateProps);
			Helper.addAction(templateProps);
		}

		if (!answers.isPage) {
			Helper.addIndex(addIndexParams);
		}
	},

	createFuncComponent: (answers: DefinitionsModel.IAnswers): void => {
		const { lowerFileName, fileName, isHaveStyle } = answers;
		const funcDir = `${Config.componentsDir}/${answers.fileName}`;
		const templatePath = './project-cli/src/templates/components/functional.mustache';
		const templateProps = {
			fileName,
			lowerFileName,
			interfaceName: `I${fileName}`,
			isHaveStyle
		};
		const indexTemplate = './project-cli/src/templates/components/index.mustache';

		const addIndexParams: DefinitionsModel.IAddIndex = {
			dirPath: `${Config.componentsDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Component added to index.ts.'
		};

		const writeFileProps: DefinitionsModel.IWriteFile = {
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
