//#region Global Imports
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//#endregion Global Imports

//#region Interface Imports
import rootReducer from './Reducers';
//#endregion Interface Imports

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  return createStore(persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    ));
};