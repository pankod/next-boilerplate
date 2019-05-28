import * as fs from 'fs';
import * as path from 'path';

export const IsAlreadyExist = (startPath: string, val: string, isFile?: boolean): boolean => {
	val = val.replace(/\b\w/g, foo => foo.toUpperCase());

	const _path = isFile ? `${startPath}/${val}.txt` : `${startPath}/${val}`;

	return fs.existsSync(path.resolve('', _path));
};
