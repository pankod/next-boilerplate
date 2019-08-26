//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import i18next from 'i18next';
//#endregion Global Imports

//#region Local Imports
import { Heading } from '@Components';
import { HomeActions } from '@Actions';
import { withI18next } from '../../src/withI18next';
import './index.scss';
//#region Local Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	constructor(props: IHomePage.IProps) {
		super(props);
	}

	renderLocaleButtons = () =>
		['en', 'es', 'tr'].map(lang => (
			<div
				key={lang}
				className="button"
				onClick={() => this.changeLanguage(lang)}
			>
				{lang}
			</div>
		));

	public render(): JSX.Element {
		const { t } = this.props;

		return (
			<div className="container">
				<div className="container__top">
					<img src="/static/images/pankod-logo.png" />
				</div>
				<div className="container__middle">
					<div className="container__middle__left">
						<div className="container__middle__left__buttons">
							{this.renderLocaleButtons()}
						</div>
					</div>
					<div className="container__middle__right">
						<span className="container__top_text">{t('common:Hello')}</span>
						<Heading text={t('common:World')} />
					</div>
				</div>
			</div>
		);
	}

	private changeLanguage(lang: string): void {
		i18next.changeLanguage(lang, (err: Error) => {
			if (err) return console.error('something went wrong loading', err);
		});
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
});

const Extended = withI18next(['common'])(HomePage);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Extended);
