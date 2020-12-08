import {combineReducers} from 'redux';

import {totalReducer} from './totalReducer';

export const rootReducer = combineReducers({
    total: totalReducer
});