import * as fs from 'fs';
import * as mustache from 'mustache';
import * as path from 'path';

import { DefinationsModel } from '../definations/Defination';

export const GetTemplate = (templatePath: string, templateProps: DefinationsModel.ITemplateProps): string => (

	mustache.render(
		fs.readFileSync(path.resolve('', templatePath), 'utf8'),
		templateProps
	)
);
