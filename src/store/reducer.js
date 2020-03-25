import { combineReducers } from 'redux-immutable';
import {
    reducer as ucenterReducer,
    actionCreators as ucenterActionCreators,
    constants as ucenterConstants
} from '../page/ucenter/store';
import {
    reducer as loginReducer,
    actionCreators as loginActionCreators,
    constants as loginConstants,
    loginDates
} from '../page/login/store';

export const reducer = combineReducers({
    ucenter: ucenterReducer,
    login: loginReducer
 });

export const actionCreators = {
    ucenter: ucenterActionCreators,
    login: loginActionCreators
};

export const constants = {
    ucenter: ucenterConstants,
    login: loginConstants
};

export const states = {
    login: loginDates
};
