import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const CreateStyle = (answers: DefinationsModel.IAnswers): void => {
	const templatePath = './project-cli/src/templates/styles.mustache';
	const templateProps = { fileName: answers.fileName };
	const pageDirPath = `${Config.pagesDir}/${answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase())}/style.scss`;
	const compDirPath = `${Config.componentsDir}/${answers.fileName}/style.scss`;

	const writeFileProps = {
		dirPath: answers.isPage ? pageDirPath : compDirPath,
		getFileContent: () => HelperFunctions.GetTemplate(templatePath, templateProps),
		message: 'Added new style file'
	};

	HelperFunctions.WriteFile(writeFileProps);
};
