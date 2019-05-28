import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const CreateInterface = (answers: DefinationsModel.IAnswers, isClass: boolean) => {
	const { fileName, lowerFileName, isPage, isConnectStore } = answers;
	const templatePath = './project-cli/src/templates/interfaces/component.d.mustache';
	const templateProps = { fileName, isClass, lowerFileName, isConnectStore };
	const pageDirPath = `${Config.pageInterfaceDir}/${fileName}.d.ts`;
	const compDirPath = `${Config.compInterfaceDir}/${fileName}.d.ts`;
	const pageInterfaceIndex = './project-cli/src/templates/interfaces/page-index.d.mustache';
	const compIntefaceIndex = './project-cli/src/templates/interfaces/component-index.d.mustache';
	const storeInterface = './project-cli/src/templates/interfaces/redux-store.d.mustache';
	const storeImportInterface = './project-cli/src/templates/interfaces/redux-import.d.mustache';

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: isPage ? pageDirPath : compDirPath,
		getFileContent: () => HelperFunctions.GetTemplate(templatePath, templateProps),
		message: 'Added new interface file'
	};

	const replaceContentParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.interfaceDir}/index.ts`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.interfaceDir}/index.ts`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate(isPage ? pageInterfaceIndex : compIntefaceIndex, templateProps),
		message: 'Interface file added to Interfaces/index.ts',
		regexKey: isPage ? /...PAGE INTERFACES/g : /...COMPONENT INTERFACES/g
	};

	const replaceStoreParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.reduxInterfaceDir}/Store.d.ts`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate(storeInterface, templateProps),
		message: 'Interface file added to Interfaces/Redux/Store.d.ts',
		regexKey: /export type IStore\s[=]\s[{]/g
	};

	HelperFunctions.WriteFile(writeFileProps);
	HelperFunctions.ReplaceContent(replaceContentParams);

	if (isConnectStore) {

		HelperFunctions.ReplaceContent(replaceStoreParams);

		setTimeout(() => {
			const replaceStoreImportParams: DefinationsModel.IReplaceContent = {
				fileDir: `${Config.reduxInterfaceDir}/Store.d.ts`,
				filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
				getFileContent: () => HelperFunctions.GetTemplate(storeImportInterface, templateProps),
				message: 'Interface file added to import section in Interfaces/Redux/Store.d.ts\n',
				regexKey: /\s[}] from '@Interfaces';/g
			};
			HelperFunctions.ReplaceContent(replaceStoreImportParams);
		},         2000);

	}
};
