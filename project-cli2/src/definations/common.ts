import * as inquirer from 'inquirer';
import { Helper } from '../definations/helper';
import { Config } from '../../config';

export module Common {

	export const fileNameQuestion = {
		message: 'Enter file name',
		name: 'fileName',
		type: 'input',
		validate(val: string) {
			return Common.validate(val);
		}
	};

	export const funcCompQuestions = [
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

	export const validate = (val: string): string | boolean => {
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
