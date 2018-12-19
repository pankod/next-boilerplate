//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IHeading } from '@Interfaces';
//#endregion Interface Imports

export class Heading extends React.Component<IHeading.IProps, IHeading.IState> {
    public render(): JSX.Element {
        const { text } = this.props;
        return (
            <div className={"title"}>
                <span className="title__back">{text}</span>
                <span className="title__front">{text}</span>
            </div>
        );
    }
}