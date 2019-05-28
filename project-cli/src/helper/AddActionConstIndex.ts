import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const AddActionConstIndex = (templateProps: DefinationsModel.ITemplateProps): void => {
	const replaceContentParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.definationsDir}/ActionConsts.ts`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.definationsDir}/ActionConsts.ts`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate('./project-cli/src/templates/reducers/action-const.mustache', templateProps),
		message: 'Action constants added to Definations/ActionConsts.ts',
		regexKey: /export const ActionConsts\s[=]\s[{]/g
	};

	HelperFunctions.ReplaceContent(replaceContentParams);
};
