import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Helper  } from './helper';
import { Common } from './common';

export const classComp = {
	showQuestions: async (): Promise<void> => {

		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isHaveStyle: boolean, isHaveReducer:
				boolean, isConnectStore: boolean }>(Common.classCompQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());

		Helper.createClassComponent(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
	}
};
