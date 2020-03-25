import * as constants from './constants';
import {fromJS} from 'immutable';
import loginDates from './states';

// facebook
// immutable.js
// immutable对象

const defaultState = fromJS(loginDates());

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_USER_TOKEN:
            return state.set('token', action.data);
        case constants.INIT_USER_INFOS:
            return state.set('userInfos', action.data);
            case constants.SET_REFRESH_DATA:
            return fromJS(action.data);
        default:
            return state;
    }
}
