// #region Global Imports
import * as React from 'react'
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { mount } from 'enzyme';
// #endregion Global Imports

// #region Local Imports
import initStore from '@Redux/store';
import { i18nInstance } from '../app/i18n/i18n'
import HomePage from '../pages/home'
import { withI18next } from './withI18next'
// #region Local Imports

const Comp = () => <div>Hello World!</div>

const mockRequest = { i18n: Object.assign(i18nInstance, { language: 'en', languages: ['en'] }) }

describe("with i18next", () => {
	it('should pass getInitialProps and namespaces to the component', () => {
		const withoutHoc = mount(
			<Provider store={initStore()}>
				<I18nextProvider i18n={i18nInstance}>
					<Comp />
				</I18nextProvider>
			</Provider>
		)

		expect(withoutHoc.props().children.props.children.type.getInitialProps).not.toBeDefined()
		expect(withoutHoc.props().children.props.children.type.namespaces).not.toBeDefined()

		const ComposedComp = withI18next()(Comp)

		const withHoc = mount(
			<Provider store={initStore()}>

				<I18nextProvider i18n={i18nInstance}>
					<ComposedComp />
				</I18nextProvider>
			</Provider>
		)

		expect(withHoc.props().children.props.children.type.getInitialProps).toBeDefined()
		expect(withHoc.props().children.props.children.type.namespaces).toBeDefined()
	})

	it('should return required props', async () => {
		const ComposedHomePage = withI18next()(HomePage)

		const props = ComposedHomePage.getInitialProps ?
			await ComposedHomePage.getInitialProps({ req: mockRequest }) : ''

		expect(props.i18n).toEqual(i18nInstance)
		expect(props.initialI18nStore).toEqual({ en: { common: {} } })
		expect(props.initialLanguage).toEqual('en')
	})

	it('when there is no req object, should return empty object without failing', async () => {
		const ComposedHomePage = withI18next()(HomePage)

		const props = ComposedHomePage.getInitialProps ?
			await ComposedHomePage.getInitialProps({}) : ''

		expect(props).toEqual({})
	})
})
