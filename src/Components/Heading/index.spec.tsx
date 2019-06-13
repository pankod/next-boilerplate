import * as React from 'react';
import { shallow } from 'enzyme';
import { Heading } from '@Components';

describe('Components', () => {
	describe('Heading', () => {
		it('should render without throwing an error', () => {
			const wrap = shallow(<Heading text={'World'} />);

			expect(wrap.find('div.title').exists()).toBe(true);
		});
	});
});
