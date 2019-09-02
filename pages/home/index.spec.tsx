// #region Global Imports
import * as React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { shallow, mount } from 'enzyme';
// #endregion Global Imports

// #region Local Imports
import HomePage from '../home/index';
import initStore from '@Redux/store';
import { i18nInstance } from '../../app/i18n/i18n';
// #endregion Local Imports

describe('HomePage', () => {
	it('should render without throwing an error', () => {
		const wrap = shallow(<HomePage />);
		expect(wrap).toBeTruthy();
	});

	it('should render without throwing an error', () => {
		const wrap = mount(
			<Provider store={initStore()}>
				<I18nextProvider i18n={i18nInstance}>
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
				<I18nextProvider i18n={i18nInstance}>
					<HomePage />
				</I18nextProvider>
			</Provider>,
		);

		const esLocaleButton = wrap.find('.es');
		esLocaleButton.simulate('click');

		const language = wrap.props().children.props.i18n.language;

		expect(language).toBe('es');
	});
});
