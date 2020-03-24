import * as constants from './constants';
import {fromJS} from 'immutable';

// facebook
// immutable.js
// immutable对象

const defaultState = fromJS({
    token: '',
    userInfos: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SET_USER_TOKEN:
            return state.set('token', action.data);
        case constants.INIT_USER_INFOS:
            return state.set('userInfos', action.data);
        default:
            return state;
    }
}
