import * as inquirer from 'inquirer';
import { DefinitionsModel } from './Definition';
import { Helper } from './helper';
import { Common } from './common';

export const funcComp = {
	showQuestions: async (): Promise<void> => {
		const answers: DefinitionsModel.IAnswers = await inquirer.prompt<{
			fileName: string;
			isHaveStyle: boolean;
		}>(Common.funcCompQuestions);

		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
		answers.styleName = answers.lowerFileName.split(' ').join('-');
		answers.fileName = answers.fileName
			.replace(/\b\w/g, foo => foo.toUpperCase())
			.split(' ')
			.join('');

		Helper.createFuncComponent(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
	},
};
