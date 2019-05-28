import * as inquirer from 'inquirer';
import * as HelperFunctions from '../helper';
import { DefinationsModel } from './Defination';
import { Common } from './common';

export const funcComp = {
	showQuestions: async (): Promise<void> => {
		const answers: DefinationsModel.IAnswers =
			await inquirer.prompt<{ fileName: string, isHaveStyle: boolean }>(Common.funcCompQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());

		HelperFunctions.CreateFuncComponent(answers);

		if (answers.isHaveStyle) {
			HelperFunctions.CreateStyle(answers);
		}
	}
};
