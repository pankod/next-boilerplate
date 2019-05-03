import { combineReducers } from 'redux';

import { HomeReducer } from './home';

export default combineReducers({
    home: HomeReducer
});