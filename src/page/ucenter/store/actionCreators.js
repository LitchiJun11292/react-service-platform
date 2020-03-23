import * as constants from './constants';
// import {fromJS} from 'immutable';

export const searchFocus = (menuName) => ({
    type: constants.SEARCH_FOCUS,
    menuName
});
