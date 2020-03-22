import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './page/login';
import Home from './page/home';
import Ucenter from './page/ucenter';
import './App.css';

function App() {
  return (
      <Switch>
          <Redirect exact from="/" to="login" />
          <Route path='/login' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/ucenter' component={Ucenter}></Route>
      </Switch>
  );
}

export default App;
