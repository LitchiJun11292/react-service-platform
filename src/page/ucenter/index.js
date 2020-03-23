import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Admin from './admin';
import WorkHall from './workHall/index';

class Ucenter extends React.Component {

    render() {
        return (
            <Admin>
                <Switch>
                    <Redirect exact from="/ucenter" to="/ucenter/service/hall" />
                    <Route path="/ucenter/service/hall" component={WorkHall}></Route>
                </Switch>
            </Admin>
        );
    }
}

export default Ucenter;
