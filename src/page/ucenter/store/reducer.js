import * as constants from './constants';
import {fromJS} from 'immutable';

// facebook
// immutable.js
// immutable对象

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_LIST_ACTION:
            return state.set('focused', action.data);
        default:
            return state;
    }
}
