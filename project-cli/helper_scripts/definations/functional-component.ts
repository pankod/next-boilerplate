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
							return 'Already added use new compoment name';
						}

						return true;
					}

					return 'Cannot be empty';
				}
			},
			{
				default: true,
				message: 'Do you want style ?',
				name: 'isHaveStyle',
				type: 'confirm'
			}
		];

		const answers: DefinationsModel.IAnswers =
			await inquirer.prompt<{ fileName: string, isHaveStyle: boolean }>(questions);

		Helper.createFuncComponent(answers);
		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}

	}
};
