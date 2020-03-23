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
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        default:
            return state;
    }
}
