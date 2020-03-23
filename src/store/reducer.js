import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../page/ucenter/store';

// redux-immutable

export default combineReducers({
    header: headerReducer
})
