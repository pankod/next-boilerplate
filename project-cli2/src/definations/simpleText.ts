import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Helper } from './helper';
import { Common } from './common';

export const simpleTextQuestion = {
	showQuestions: async (): Promise<void> => {
		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isFileNameAdd: boolean}>(Common.simpleTextQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());

		const opt: DefinationsModel.ICreateFileOptions = {
			isFileNameAdd: answers.isFileNameAdd
		};

		Helper.createSimpleText(answers, opt);
	}
};
