import React from 'react';

import { ILocaleButton } from './LocaleButton';

import { Button } from '../Basic';

export const LocaleButton: React.FunctionComponent<ILocaleButton.IProps> = ({ lang, isActive, onClick }) => {
    return <Button className={isActive ? 'active' : ''} onClick={onClick}>{lang}</Button>;
};