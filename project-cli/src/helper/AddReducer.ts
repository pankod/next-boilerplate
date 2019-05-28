import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const AddReducer = (answers: DefinationsModel.IAnswers): void => {
	const { fileName, lowerFileName, isConnectStore } = answers;

	const reducerFileDir = `${Config.reducerDir}/${lowerFileName}.ts`;
	const reducerTemplate = './project-cli/src/templates/reducers/reducer.mustache';
	const templateProps = { fileName, lowerFileName };

	const replaceContentParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.reducerDir}/index.ts`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate('./project-cli/src/templates/reducers/index.mustache', templateProps),
		message: 'Reducer added to Redux/Reducers/index.ts',
		regexKey: /import { combineReducers } from 'redux';/g
	};

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: reducerFileDir,
		getFileContent: () => HelperFunctions.GetTemplate(reducerTemplate, templateProps),
		message: 'Added new reducer file'
	};

	HelperFunctions.WriteFile(writeFileProps);
	HelperFunctions.ReplaceContent(replaceContentParams);
	HelperFunctions.AddReducerCombine(templateProps);

	if (isConnectStore) {
		HelperFunctions.AddActionConstIndex(templateProps);
	}
};
