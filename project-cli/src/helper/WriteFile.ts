import * as fs from 'fs';
import * as path from 'path';

import { DefinationsModel } from '../definations/Defination';

export const WriteFile = (params: DefinationsModel.IWriteFile) => {
	fs.writeFileSync(
		path.resolve('', params.dirPath),
		params.getFileContent()
	);
};
