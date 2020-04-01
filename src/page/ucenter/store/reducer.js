import * as constants from './constants';
import {fromJS} from 'immutable';

// facebook
// immutable.js
// immutable对象

const defaultState = fromJS({
    focused: false,
    tableRouteList: []
});

// 处理tabs页的增删改
const tablesRoutelist = (state, action) => {
    switch (action.opa) {
        case 0:
            let arrClear = state.get('tableRouteList').clear();
            return state.set('tableRouteList', arrClear.concat(action.data[0]));
        case -1:
            let arrSplit = state.get('tableRouteList').clear();
            return state.set('tableRouteList', arrSplit.concat(...action.data));
        default:
            let tableRouteList = state.get('tableRouteList').toJS();
            let Index = tableRouteList.findIndex(item => action.data.url === item.url);
            if (Index === -1) {
                tableRouteList = state.get('tableRouteList').concat(action.data);
                return state.set('tableRouteList', tableRouteList);
            } else {
                return state;
            }

    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.INIT_LIST_ACTION:
            return state.set('focused', action.data);
        case constants.INIT_TABLES_ROUTELIST:
            return tablesRoutelist(state, action);
        default:
            return state;
    }
}
