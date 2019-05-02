import * as fs from 'fs';
import * as logSymbols from 'log-symbols';
import * as mustache from 'mustache';
import * as path from 'path';
import { DefinationsModel } from './Defination';
import { helpers } from 'rx';

export const Config = {
	interfaceDir: '../src/Interfaces',
	compInterfaceDir: '../src/Interfaces/Components',
	pageInterfaceDir: '../src/Interfaces/Pages',
	reduxInterfaceDir: '../src/Interfaces/Redux',
	componentsDir: '../src/Components',
	definationsDir: '../src/Definations',
	pagesDir: '../pages',
	reducerDir: '../src/Redux/Reducers',
	routesDir: '../app',
	storeDir: '../src'
};

export const Helper = {
	addRoute: (answers: DefinationsModel.IAnswers) => {
		const templateProps = {
			fileName: answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase()),
			isHavePath: answers.isHavePath,
			routePath: answers.routePath
		};

		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.routesDir}/routes.js`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.routesDir}/routes.js`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./helper_scripts/templates/routes.mustache', templateProps),
			message: 'Added route path to routes.js',
			regexKey: /^(?:[\t ]*(?:\r?\n|\r))+module.exports = routes;/gm
		};

		Helper.replaceContent(replaceContentParams);
	},

	isAlreadyExist: (startPath: string, val: string): boolean => {
		val = val.replace(/\b\w/g, foo => foo.toUpperCase());

		return fs.existsSync(path.resolve('', `${startPath}/${val}`));
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
			params.getFileContent(),
			err => {
				if (err) throw err;
				console.log(logSymbols.success, params.message);
			}
		);
	},

	createFile: (dirPath: string): void => {
		fs.mkdirSync(path.resolve('', dirPath));
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
		const templatePath = './helper_scripts/templates/interfaces/component.d.mustache';
		const templateProps = { fileName, isClass, lowerFileName };
		const pageDirPath = `${Config.pageInterfaceDir}/${fileName}.d.ts`;
		const compDirPath = `${Config.compInterfaceDir}/${fileName}.d.ts`;
		const pageInterfaceIndex = './helper_scripts/templates/interfaces/page-index.d.mustache';
		const compIntefaceIndex = './helper_scripts/templates/interfaces/component-index.d.mustache';
		const storeInterface = './helper_scripts/templates/interfaces/redux-store.d.mustache';

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: isPage ? pageDirPath : compDirPath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Created new interface file.'
		};


		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.interfaceDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.interfaceDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate(isPage ? pageInterfaceIndex : compIntefaceIndex, templateProps),
			message: 'Interface added to index',
			regexKey: isPage ? /...PAGE INTERFACES/g : /...COMPONENT INTERFACES/g
		};

		const replaceStoreParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.reduxInterfaceDir}/Store.d.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate(storeInterface, templateProps),
			message: 'Interface added to redux store.d.ts ',
			regexKey: /export type IStore\s[=]\s[{]/g
		};

		Helper.writeFile(writeFileProps);
		Helper.replaceContent(replaceContentParams);

		if (isPage || isConnectStore) {
			Helper.replaceContent(replaceStoreParams);
		}
	},

	createStyle: (answers: DefinationsModel.IAnswers): void => {
		const templatePath = './helper_scripts/templates/styles.mustache';
		const templateProps = { fileName: answers.fileName };
		const pageDirPath = `${Config.pagesDir}/${answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase())}/style.scss`;
		const compDirPath = `${Config.componentsDir}/${answers.fileName}/style.scss`;

		const writeFileProps = {
			dirPath: answers.isPage ? pageDirPath : compDirPath,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Created new style file'
		};

		Helper.writeFile(writeFileProps);
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

	addActionConstIndex: (templateProps: DefinationsModel.ITemplateProps): void => {
		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.definationsDir}/ActionConsts.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.definationsDir}/ActionConsts.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./helper_scripts/templates/reducers/action-const.mustache', templateProps),
			message: 'Added to actionConsts',
			regexKey: /export const ActionConsts\s[=]\s[{]/g
		};

		Helper.replaceContent(replaceContentParams);
	},

	addReducerIndex: (templateProps: DefinationsModel.ITemplateProps): void => {
		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.reducerDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./helper_scripts/templates/reducers/store.mustache', templateProps),
			message: 'Reducer added to combineReducers in reducers index',
			regexKey: /export default combineReducers[(][{]/g
		};

		Helper.replaceContent(replaceContentParams);
	},

	addReducer: (answers: DefinationsModel.IAnswers): void => {
		const { fileName, lowerFileName, isPage, isConnectStore } = answers;

		const reducerFileDir = `${Config.reducerDir}/${lowerFileName}.ts`;
		const reducerTemplate = './helper_scripts/templates/reducers/reducer.mustache';
		const templateProps = {fileName, lowerFileName };

		const replaceContentParams: DefinationsModel.IReplaceContent = {
			fileDir: `${Config.reducerDir}/index.ts`,
			filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
			getFileContent: () => Helper.getTemplate('./helper_scripts/templates/reducers/index.mustache', templateProps),
			message: 'Reducer added to to index.ts',
			regexKey: /import { combineReducers } from 'redux';/g
		};

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: reducerFileDir,
			getFileContent: () => Helper.getTemplate(reducerTemplate, templateProps),
			message: 'Created new reducer file'
		};

		Helper.writeFile(writeFileProps);
		Helper.replaceContent(replaceContentParams);
		Helper.addReducerIndex(templateProps);
		Helper.addActionConstIndex(templateProps);
	},

	createClassComponent: (answers: DefinationsModel.IAnswers): void => {

		const { lowerFileName } = answers;
		const pagesDir = `${Config.pagesDir}/${lowerFileName}`;
		const classDir = answers.isPage ? pagesDir : `${Config.componentsDir}/${answers.fileName}`;
		const templatePath = './helper_scripts/templates/components/class.mustache';
		const templateProps = {
			fileName: answers.fileName,
			interfaceName: `I${answers.fileName}`,
			isConnectStore: answers.isConnectStore,
			isHaveStyle: answers.isHaveStyle
		};
		const indexTemplate = './helper_scripts/templates/components/index.mustache';

		const addIndexParams: DefinationsModel.IAddIndex = {
			dirPath: `${Config.componentsDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Component added to index.ts'
		};

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: `${classDir}/index.tsx`,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Added new class component'
		};

		Helper.createFile(classDir);
		Helper.writeFile(writeFileProps);
		Helper.createInterface(answers, true);
		Helper.addReducer(templateProps);

		if (!answers.isPage) {
			Helper.addIndex(addIndexParams);
		}
	},

	createFuncComponent: (answers: DefinationsModel.IAnswers): void => {
		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		const funcDir = `${Config.componentsDir}/${answers.fileName}`;
		const templatePath = './helper_scripts/templates/components/functional.mustache';
		const templateProps = {
			fileName: answers.fileName,
			interfaceName: `I${answers.fileName}`,
			isHaveStyle: answers.isHaveStyle
		};
		const indexTemplate = './helper_scripts/templates/components/index.mustache';

		const addIndexParams: DefinationsModel.IAddIndex = {
			dirPath: `${Config.componentsDir}/index.ts`,
			getFileContent: () => Helper.getTemplate(indexTemplate, templateProps),
			message: 'Component added to index.ts.'
		};

		const writeFileProps: DefinationsModel.IWriteFile = {
			dirPath: `${funcDir}/index.tsx`,
			getFileContent: () => Helper.getTemplate(templatePath, templateProps),
			message: 'Created new functional component.'
		};

		Helper.createFile(funcDir);
		Helper.writeFile(writeFileProps);
		Helper.addIndex(addIndexParams);
		Helper.createInterface(answers, false);
	}
};
