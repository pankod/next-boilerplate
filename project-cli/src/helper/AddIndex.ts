import * as fs from 'fs';
import * as logSymbols from 'log-symbols';
import * as path from 'path';

import { DefinationsModel } from '../definations/Defination';

export const AddIndex = (params: DefinationsModel.IAddIndex): void => {
	fs.appendFile(
		path.resolve('', params.dirPath),
		`${params.getFileContent()}\n`,
		err => {
			if (err) throw err;
			console.log(logSymbols.success, params.message);
		}
	);
};
