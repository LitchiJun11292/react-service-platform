import {takeLatest, put, call, select} from 'redux-saga/effects';
import {constants, actionCreators, states} from './reducer';
import {initListAction} from './../page/ucenter/store/actionCreators';
import Axios from './../utils/request.js';
import { message } from 'antd';


function* getInitList () {
    try {
        const res = yield Axios.get("/mocks/list");
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        message.warning('网络请求失败');
    }

}

// 登录
function* setUserLogin () {
    try {
        const res = yield Axios.get("/security/user/login");
        const action = actionCreators.login.setUserToken(res);
        yield put(action);
        yield call(getUserInfos);
        message.success('登录成功');
    } catch (e) {
        message.warning('网络请求失败');
    }

}

// 获取用户数据
function* getUserInfos () {
    try {
        const state = yield select();
        const res = yield Axios.get("/userInfo/currentUserInfo"
            // {token: state.getIn(['login', 'token'])}
        );
        console.log(state.getIn(['login', 'token']));
        const action = actionCreators.login.initUserInfos(res);
        yield put(action);
    } catch (e) {
        message.warning('网络请求失败');
    }

}

// 用户退出登录
function* setSignOut () {
    try {
        const res = yield Axios.get("/security/user/logout");
        const action = actionCreators.login.setUserToken(res);
        yield put(action);
        yield put(actionCreators.login.setRefreshData(states.login()));
        message.success('登出成功');
        window.location.href="#/login";
    } catch (e) {
        message.warning('网络请求失败');
    }

}

// generator 函数
function* mySaga () {
    yield takeLatest(constants.ucenter.GET_INIT_LIST, getInitList);
    yield takeLatest(constants.login.SET_USER_LOGIN, setUserLogin);
    yield takeLatest(constants.login.SET_SIGN_OUT, setSignOut);
}

export default mySaga;
