import * as constants from './constants';

export const setUserLogin = () => ({
    type: constants.SET_USER_LOGIN
});


export const setUserToken = (data) => ({
    type: constants.SET_USER_TOKEN,
    data
});

export const initUserInfos = (data) => ({
    type: constants.INIT_USER_INFOS,
    data
});
