import * as inquirer from 'inquirer';
import * as HelperFunctions from '../helper';
import { DefinationsModel } from './Defination';
import { Common } from './common';

export const pageComp = {
	showQuestions: async (): Promise<void> => {
		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isHaveStyle: boolean, isHaveReducer:
			   boolean, isConnectStore: boolean,  isHavePath: boolean, routePath: string }>(Common.pageCompQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
		answers.isPage = true;
		HelperFunctions.CreateClassComponent(answers);
		HelperFunctions.AddRoute(answers);

		if (answers.isHaveStyle) {
			HelperFunctions.CreateStyle(answers);
		}

	}
};
