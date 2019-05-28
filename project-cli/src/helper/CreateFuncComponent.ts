import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const CreateFuncComponent = (answers: DefinationsModel.IAnswers): void => {
	const { lowerFileName, fileName, isHaveStyle } = answers;
	const funcDir = `${Config.componentsDir}/${answers.fileName}`;
	const templatePath = './project-cli/src/templates/components/functional.mustache';
	const templateProps = {
		fileName,
		interfaceName: `I${fileName}`,
		isHaveStyle,
		lowerFileName
	};
	const indexTemplate = './project-cli/src/templates/components/index.mustache';

	const addIndexParams: DefinationsModel.IAddIndex = {
		dirPath: `${Config.componentsDir}/index.ts`,
		getFileContent: () => HelperFunctions.GetTemplate(indexTemplate, templateProps),
		message: 'Component added to index.ts.'
	};

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: `${funcDir}/index.tsx`,
		getFileContent: () => HelperFunctions.GetTemplate(templatePath, templateProps),
		message: 'Add new functional component.'
	};

	HelperFunctions.CreateFile(funcDir);
	HelperFunctions.WriteFile(writeFileProps);
	HelperFunctions.AddIndex(addIndexParams);
	HelperFunctions.CreateInterface(answers, false);
};
