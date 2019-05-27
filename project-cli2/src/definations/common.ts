import * as inquirer from 'inquirer';
import { Helper } from '../definations/helper';
import { Config } from '../../config';

export module Common {

	export const fileNameQuestion = {
		message: 'Enter file name',
		name: 'fileName',
		type: 'input',
		validate(val: string) {
			return Common.validate(val, Config.componentsDir);
		}
	};

	export const funcCompQuestions = [
		{
			message: 'Enter functional component name',
			name: 'fileName',
			type: 'input',
			validate(val: string) {
				return Common.validate(val, Config.componentsDir);
			}
		},
		{
			default: true,
			message: 'Do you want to add style file?',
			name: 'isHaveStyle',
			type: 'confirm'
		}
	];

	export const classCompQuestions = [
		{
			message: 'Enter class component name',
			name: 'fileName',
			type: 'input',
			validate(val: string) {
				return Common.validate(val, Config.componentsDir);
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

	export const pageCompQuestions = [
		{
			message: 'Enter page name',
			name: 'fileName',
			type: 'input',
			validate(val: string) {
				return Common.validate(val, Config.pagesDir);
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

	export const validate = (val: string, path: string): string | boolean => {
		if (val.length) {
			if (
				Helper.isAlreadyExist(
					path,
					val
				)
			) {
				return 'This component name already used before, enter new name.';
			}

			return true;
		}

		return 'Can not be empty';
	};
}

export default Common;
