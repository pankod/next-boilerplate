import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const AddReducerCombine = (templateProps: DefinationsModel.ITemplateProps): void => {
	const replaceContentParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.reducerDir}/index.ts`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.reducerDir}/index.ts`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate('./project-cli/src/templates/reducers/store.mustache', templateProps),
		message: 'Reducer file added combineReducers in Redux/Reducers/index.ts',
		regexKey: /export default combineReducers[(][{]/g
	};

	HelperFunctions.ReplaceContent(replaceContentParams);
};
