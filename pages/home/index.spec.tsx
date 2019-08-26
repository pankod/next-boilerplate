import * as React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../home/index';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '../../app/i18n/i18nForTests';

import { Provider } from 'react-redux';

import initStore from '@Redux/store';

describe('HomePage', () => {
	it('should render without throwing an error', () => {
		const wrap = shallow(<HomePage />);
		expect(wrap).toBeTruthy();
	});

	it('should render without throwing an error', () => {
		const wrap = mount(
			<Provider store={initStore()}>
				<I18nextProvider i18n={i18nForTests}>
					<HomePage />
				</I18nextProvider>
			</Provider>,
		);

		expect(wrap.find('.container')).toHaveLength(1);
		expect(wrap.find('.container__top')).toHaveLength(1);
		expect(wrap.find('.container__middle')).toHaveLength(1);
		expect(wrap.find('.title')).toHaveLength(1);
		expect(wrap.find('.button')).toHaveLength(3);
	});

	it('should update language', () => {
		const wrap = mount(
			<Provider store={initStore()}>
				<I18nextProvider i18n={i18nForTests}>
					<HomePage />
				</I18nextProvider>
			</Provider>,
		);

		const esLocaleButton = wrap.find('.es')
		esLocaleButton.simulate('click')

		const language = wrap.props().children.props.i18n.language

		expect(language).toBe('es')
	})
});
