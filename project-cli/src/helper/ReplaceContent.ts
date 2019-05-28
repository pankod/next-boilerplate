import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const ReplaceContent = (params: DefinationsModel.IReplaceContent): void => {
	const replaceFile = params.filetoUpdate.replace(params.regexKey, params.getFileContent());

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: params.fileDir,
		getFileContent: () => replaceFile,
		message: params.message
	};

	HelperFunctions.WriteFile(writeFileProps);
};
