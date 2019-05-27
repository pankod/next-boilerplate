import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Config, Helper } from './helper';

export const funcComp = {
	showQuestions: async (): Promise<void> => {
		const questions = [
			{
				message: 'Enter functional component name',
				name: 'fileName',
				type: 'input',
				validate(val: string): string | boolean {
					if (val.length) {
						if (
							Helper.isAlreadyExist(
								Config.componentsDir,
								val
							)
						) {
							return 'This component name already used before, enter new name.';
						}

						return true;
					}

					return 'Can not be empty';
				}
			},
			{
				default: true,
				message: 'Do you want to add style file?',
				name: 'isHaveStyle',
				type: 'confirm'
			}
		];

		const answers: DefinationsModel.IAnswers =
			await inquirer.prompt<{ fileName: string, isHaveStyle: boolean }>(questions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());

		Helper.createFuncComponent(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
	}
};
