import * as inquirer from 'inquirer';
import { DefinationsModel } from './Defination';
import { Config, Helper } from './helper';

export const pageComp = {
	showQuestions: async (): Promise<void> => {
		const questions = [
			{
				message: 'Enter page name',
				name: 'fileName',
				type: 'input',
				validate(val: string): string | boolean {
					if (val.length) {
						if (
							Helper.isAlreadyExist(
								Config.pagesDir,
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
				choices: [
					new inquirer.Separator(),
					{
						name: 'Yes, I want to add custom path?',
						value: true
					},
					{
						name: 'No, use default.',
						value: false
					}
				],
				message: 'Do you want to add custom route or use default route name?',
				name: 'isHavePath',
				type: 'list'
			},
			{
				message: 'Enter route name',
				name: 'routePath',
				type: 'input',
				when: ({ isHavePath }) => isHavePath
			},

			{
				default: false,
				message: 'Do you want to have a connection to store?',
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
				message: 'Do you want to create a new reducer or use your own?',
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
			   boolean, isConnectStore: boolean,  isHavePath: boolean, routePath: string }>(questions);

		answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
		answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
		answers.isPage = true;
		Helper.createClassComponent(answers);
		Helper.addRoute(answers);

		if (answers.isHaveStyle) {
			Helper.createStyle(answers);
		}

	}
};
