import * as fs from 'fs';
import * as path from 'path';

import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const AddRoute = (answers: DefinationsModel.IAnswers) => {
	const { isHavePath, routePath, fileName } = answers;
	const templateProps = {
		fileName: fileName.replace(/\b\w/g, foo => foo.toLowerCase()),
		isHavePath,
		routePath
	};

	const replaceContentParams: DefinationsModel.IReplaceContent = {
		fileDir: `${Config.routesDir}/routes.js`,
		filetoUpdate: fs.readFileSync(path.resolve('', `${Config.routesDir}/routes.js`), 'utf8'),
		getFileContent: () => HelperFunctions.GetTemplate('./project-cli/src/templates/routes.mustache', templateProps),
		message: `Route added to routes.js as ${isHavePath ? `'/${routePath}'` : `'/${fileName}/index'`}`,
		regexKey: /^(?:[\t ]*(?:\r?\n|\r))+module.exports = routes;/gm
	};

	HelperFunctions.ReplaceContent(replaceContentParams);
};
