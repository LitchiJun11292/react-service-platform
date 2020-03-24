import {takeLatest, put, call, select} from 'redux-saga/effects';
import {constants, actionCreators} from './reducer';
import {initListAction} from './../page/ucenter/store/actionCreators';
import Axios from './../utils/request.js';


function* getInitList () {
    try {
        const res = yield Axios.get("/mocks/list");
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('网络请求失败');
    }

}

// 登录
function* setUserLogin () {
    try {
        const res = yield Axios.get("/security/user/login");
        const action = actionCreators.login.setUserToken(res);
        yield put(action);
        yield call(getUserInfos);
    } catch (e) {
        console.log('网络请求失败');
    }

}

// 获取用户数据
function* getUserInfos () {
    try {
        const state = yield select();
        const res = yield Axios.get("/userInfo/currentUserInfo"
            // {token: state.getIn(['login', 'token'])}
        );
        const action = actionCreators.login.initUserInfos(res);
        yield put(action);
    } catch (e) {
        console.log('网络请求失败');
    }

}

// generator 函数
function* mySaga () {
    yield takeLatest(constants.ucenter.GET_INIT_LIST, getInitList);
    yield takeLatest(constants.login.SET_USER_LOGIN, setUserLogin);
}

export default mySaga;
