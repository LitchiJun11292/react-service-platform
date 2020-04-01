import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Provider, KeepAlive} from 'react-keep-alive';
import Admin from './admin';
import tabsRoute from './../../utils/tabsRoute.js';
// import WorkHall from './workHall/index';
// import CollegeInfo from './organization/collegeInfo/index';
// import LCSite from './organization/LCSite/index';
// import CRSPSite from './organization/CRSPSite/index';
// import RegOrRcd from './regOrRcdCenter/regOrRcd/index';
// import RegOrRcdPro from './regOrRcdCenter/regOrRcdPro/index';
// import Contribute from './InfoManage/contribute/index';
// import UserManage from './sysManage/userManage/index';
// import RoleManage from './sysManage/roleManage/index';

class Ucenter extends React.Component {

    render () {
        return (
            <Admin>
                <Provider>
                    <Switch>
                        <Redirect exact from="/ucenter" to="/ucenter/service/hall"/>
                        {
                            tabsRoute.map(item => {
                                let TrComponent = item.component;
                                return (
                                    <Route path={item.url} key={item.url}>
                                        <KeepAlive name={item.name}>
                                            <TrComponent/>
                                        </KeepAlive>
                                    </Route>
                                )
                            })
                        }
                        {/*<Route path="/ucenter/service/hall" component={WorkHall}/>*/}
                        {/*<Route path="/ucenter/collectInformation" component={CollegeInfo}/>*/}
                        {/*<Route path="/ucenter/learningCenter" component={LCSite}/>*/}
                        {/*<Route path="/ucenter/correspondence" component={CRSPSite}/>*/}
                        {/*<Route path="/ucenter/registration" component={RegOrRcd}/>*/}
                        {/*<Route path="/ucenter/progressQuery" component={RegOrRcdPro}/>*/}
                        {/*<Route path="/ucenter/contribute" component={Contribute}/>*/}
                        {/*<Route path="/ucenter/userManagement" component={UserManage}/>*/}
                        {/*<Route path="/ucenter/roleManagement" component={RoleManage}/>*/}
                    </Switch>
                </Provider>
            </Admin>
        );
    }
}

export default Ucenter;
