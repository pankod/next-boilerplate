import { Config } from '../../config';
import { DefinationsModel } from '../definations/Defination';
import * as HelperFunctions from './';

export const AddAction = (answers: DefinationsModel.IAnswers): void => {
	const { fileName } = answers;
	const actionFileDir = `${Config.actionDir}/${fileName}Actions.ts`;
	const actionTemplate = './project-cli/src/templates/reducers/action.mustache';
	const indexTemplate = './project-cli/src/templates/reducers/action-index.mustache';
	const templateProps = { fileName };

	const writeFileProps: DefinationsModel.IWriteFile = {
		dirPath: actionFileDir,
		getFileContent: () => HelperFunctions.GetTemplate(actionTemplate, templateProps),
		message: 'Added new action file'
	};

	const addIndexParams: DefinationsModel.IAddIndex = {
		dirPath: `${Config.actionDir}/index.ts`,
		getFileContent: () => HelperFunctions.GetTemplate(indexTemplate, templateProps),
		message: 'Added action file to index.ts Actions/index.ts'
	};

	HelperFunctions.AddIndex(addIndexParams);

	HelperFunctions.WriteFile(writeFileProps);
};
