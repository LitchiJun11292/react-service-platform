import {createStore, applyMiddleware, compose} from 'redux';
import {reducer, actionCreators} from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(mySaga);

// 根据需要缓存的storeLogin来进行刷新缓存
if (sessionStorage.getItem('storeLogin')) {
    let datas = JSON.parse(sessionStorage.getItem('storeLogin'));
    store.dispatch(actionCreators.login.setRefreshData(datas));
    sessionStorage.removeItem("storeLogin");
}

export default store;
