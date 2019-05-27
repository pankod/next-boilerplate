import * as inquirer from 'inquirer';
import { Helper } from '../definations/helper';
import { Config } from '../../config';

export module Common {

	export const fileNameQuestion = {
		message: 'Enter file name',
		name: 'fileName',
		type: 'input',
		validate(val: string) {
			return Common.validate(val, 'This file name already used before, enter new name.');
		}
	};

	export const funcCompQuestions = [
		{
			message: 'Enter functional component name',
			name: 'fileName',
			type: 'input',
			validate(val: string) {
				return Common.validate(val, 'This component name already used before, enter new name.');
			}
		},
		{
			default: true,
			message: 'Do you want to add style file?',
			name: 'isHaveStyle',
			type: 'confirm'
		}
	];

	export const validate = (val: string, errMsg?: string): string | boolean => {
		if (val.length) {
			if (
				Helper.isAlreadyExist(
					Config.filesDir,
					val,
					true
				)
			) {
				return 'This file name already used before, enter new name.';
			}

			return true;
		}

		return 'Can not be empty';
	};
}

export default Common;
