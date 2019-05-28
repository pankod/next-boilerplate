import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const CreateClassComponent = (answers: DefinationsModel.IAnswers): void => {

	const { lowerFileName, isConnectStore } = answers;
	const pagesDir = `${Config.pagesDir}/${lowerFileName}`;
	const classDir = answers.isPage ? pagesDir : `${Config.componentsDir}/${answers.fileName}`;
	const templatePath = './project-cli/src/templates/components/class.mustache';
	const templateProps = {
		fileName: answers.fileName,
		interfaceName: `I${answers.fileName}`,
		isConnectStore: answers.isConnectStore,
		isHaveStyle: answers.isHaveStyle,
		lowerFileName: answers.lowerFileName
	};
	const indexTemplate = './project-cli/src/templates/components/index.mustache';

	const addIndexParams: DefinationsModel.IAddIndex = {
		dirPath: `${Config.componentsDir}/index.ts`,
		getFileContent: () => HelperFunctions.GetTemplate(indexTemplate, templateProps),
		message: 'Component added to index.ts'
	};

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: `${classDir}/index.tsx`,
		getFileContent: () => HelperFunctions.GetTemplate(templatePath, templateProps),
		message: 'Added new class component'
	};

	HelperFunctions.CreateFile(classDir);
	HelperFunctions.WriteFile(writeFileProps);
	HelperFunctions.CreateInterface(answers, true);

	if (isConnectStore) {
		HelperFunctions.AddReducer(templateProps);
		HelperFunctions.AddAction(templateProps);
	}

	if (!answers.isPage) {
		HelperFunctions.AddIndex(addIndexParams);
	}
};
