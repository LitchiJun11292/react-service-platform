import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Ucenter from './page/ucenter';
import './App.css';

class App extends React.Component {

    componentDidMount () {
        window.addEventListener("beforeunload", this.beforeunloadFn);
    }

    componentWillUnmount () {
        window.removeEventListener("beforeunload", this.beforeunloadFn);

    }

    render () {
        return (<Switch>
            <Redirect exact from="/" to="login"/>
            <Route path='/login' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/ucenter' component={Ucenter}></Route>
        </Switch>)
    }

    beforeunloadFn = () => {
        sessionStorage.setItem('storeLogin', JSON.stringify(this.props.states.get('login')))
    }
}

// function App () {
//     return (
//         <Switch>
//             <Redirect exact from="/" to="login"/>
//             <Route path='/login' component={Login}></Route>
//             <Route path='/home' component={Home}></Route>
//             <Route path='/ucenter' component={Ucenter}></Route>
//         </Switch>
//     );
// }

const mapState = (state) => ({
    states: state
});

export default connect(mapState, null)(App);
