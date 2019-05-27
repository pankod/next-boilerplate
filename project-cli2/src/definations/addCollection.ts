import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Helper } from './helper';
import { Common } from './common';

export const addCollectionQuestion = {
	showQuestions: async (): Promise<void> => {
		// tslint:disable-next-line:max-line-length
		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isCustomFileName: boolean, customFileName?: string}>(Common.addCollectionQuestions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());

		const opt: DefinationsModel.ICreateFileOptions = {
			isCustomFileName: answers.isCustomFileName,
			isFileNameAdd: true
		};

		answers.isCustomFileName ? opt.customFileName = answers.customFileName : undefined;

		Helper.createNewAddCollecton(answers, opt);
	}
};
