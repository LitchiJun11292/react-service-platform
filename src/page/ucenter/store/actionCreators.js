import * as constants from './constants';

export const initListAction = (data) => ({
    type: constants.INIT_LIST_ACTION,
    data
});

export const getInitList = () => ({
    type: constants.GET_INIT_LIST
});
