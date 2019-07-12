import * as inquirer from 'inquirer';
import { DefinitionsModel } from './Definition';
import { Helper } from './helper';
import { Common } from './common';

export const pageComp = {
	showQuestions: async (): Promise<void> => {
		const answers: DefinitionsModel.IAnswers = await inquirer.prompt<{
			fileName: string;
			isHaveStyle: boolean;
			isHaveReducer: boolean;
			isConnectStore: boolean;
			isHavePath: boolean;
			routePath: string;
		}>(Common.pageCompQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName
			.replace(/\b\w/g, foo => foo.toLowerCase())
			.split(' ')
			.join('-');
		answers.isPage = true;
		Helper.createClassComponent(answers);
		Helper.addRoute(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
	},
};
