import * as fs from 'fs';
import * as path from 'path';

export const CreateFile = (dirPath: string): void => {
	fs.mkdirSync(path.resolve('', dirPath));
};
