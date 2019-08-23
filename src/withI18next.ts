//#region Global Imports
import { translate } from 'react-i18next';
import { NextComponentType, NextContext, NextComponentClass } from 'next';
//#endregion Global Imports

//#region Local Imports
import { getInitialProps, I18n } from '../app/i18n';
//#endregion Local Imports

const setComposedInitialProps = async (ComposedComponent: NextComponentType, ctx: NextContext) => {
	return ComposedComponent.getInitialProps ? await ComposedComponent.getInitialProps(ctx) : {}
}

export const withI18next = (namespaces = ['common']) => (ComposedComponent: NextComponentType) => {
	const Extended: NextComponentClass = translate(namespaces, { i18n: I18n, wait: process.browser })(
		ComposedComponent
	);

	Extended.getInitialProps = async (ctx: NextContext) => {

		const composedInitialProps = await setComposedInitialProps(ComposedComponent, ctx)

		const i18nInitialProps =
			ctx.req && !process.browser ? getInitialProps(ctx.req, namespaces) : {}

		return {
			...composedInitialProps,
			...i18nInitialProps,
		};
	};

	return Extended;
};
