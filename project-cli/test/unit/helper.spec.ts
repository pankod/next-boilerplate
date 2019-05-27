

import { Config } from '../../config';
import { DefinationsModel } from '../../src/definations/Defination';
import { Helper } from '../../src/definations/helper';
import * as path from 'path';

describe('Test Helper constructor', () => {

	 test('getTemplate method', () => {
		const templatePath = `${Config.mockDir}/simpleText.mustache`;

		const templateProps = {
			fileName: 'collection'
		};

		const result = Helper.getTemplate(templatePath, templateProps);

		expect(result).not.toEqual('');
	});

});
