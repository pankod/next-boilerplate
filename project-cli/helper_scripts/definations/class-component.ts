import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Config, Helper  } from './helper';

export const classComp = {
	showQuestions: async (): Promise<void> => {
		const questions = [
			{
				message: 'Enter class component name',
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
				default: false,
				message: 'Do you want to connect store ?',
				name: 'isConnectStore',
				type: 'confirm'
			},
			{
				choices: [
					new inquirer.Separator(),
					{
						name: 'Yes, I want to have new reducer.',
						value: true
					},
					{
						name: 'No, do not create a new reducer.',
						value: false
					}
				],
				message: 'Do you want to add a new reducer?',
				name: 'isHaveReducer',
				type: 'list',
				when: ({ isConnectStore }) => isConnectStore
			},
			{
				default: true,
				message: 'Do you want to add a style file?',
				name: 'isHaveStyle',
				type: 'confirm'
			}
		];

		const answers: DefinationsModel.IAnswers = await inquirer.prompt<{ fileName: string, isHaveStyle: boolean, isHaveReducer:
				boolean, isConnectStore: boolean }>(questions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());

		Helper.createClassComponent(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}
	}
};
