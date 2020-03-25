import * as constants from './constants';

// 派发登录动作
export const setUserLogin = () => ({
    type: constants.SET_USER_LOGIN
});

// 初始化token
export const setUserToken = (data) => ({
    type: constants.SET_USER_TOKEN,
    data
});

// 初始化用户信息
export const initUserInfos = (data) => ({
    type: constants.INIT_USER_INFOS,
    data
});

// 刷新浏览器数据重置
export const setRefreshData = (data) => ({
    type: constants.SET_REFRESH_DATA,
    data
});

// 派发用户登出
export const setSignOut = () => ({
    type: constants.SET_SIGN_OUT
});
