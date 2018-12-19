//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//#endregion Global Imports

//#region Interface Imports
import { IHomePage } from '@Interfaces';
import { Heading } from '@Components';
import { HomeActions } from '@Actions';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	public render(): JSX.Element {
		return (
			<div className="title">
				Hello!
				<Heading text="World!" />
       		</div>
		);
	}
}

const mapStateToProps = state => state.home;

const mapDispatchToProps = dispatch => (
	{
		Map: bindActionCreators(HomeActions.Map, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);