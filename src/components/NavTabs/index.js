import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {Tabs} from 'antd';
import './index.scss';
import {actionCreators} from "../../store/reducer";
import {
    LoginOutlined
} from '@ant-design/icons';

const {TabPane} = Tabs;


class NavTabs extends React.Component {

    onChange = activeKey => {
        this.setState({activeKey});
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    remove = targetKey => {
        const {tableRouteList} = this.props;
        let activeKey = this.props.location.pathname;
        let lastIndex;
        tableRouteList.toJS().forEach((pane, i) => {
            if (pane.url === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = tableRouteList.toJS().filter(pane => pane.url !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].url;
            } else {
                activeKey = panes[0].url;
            }
        }
        this.setState({activeKey});
        this.props.initTablesRoutelist(panes, -1);
        this.props.history.push(activeKey);
    };

    handleClear = () => {
        this.props.initTablesRoutelist(this.props.tableRouteList.toJS(), 0);
        this.props.history.push(this.props.tableRouteList.toJS()[0].url);
    };

    render () {
        const {tableRouteList} = this.props;
        return (
            <div className="NavTabs_Total">
                <Tabs
                    className="NavTabs"
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.props.location.pathname}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {tableRouteList.toJS().map(pane => (
                        <TabPane tab={
                            <NavLink to={pane.url} style={{color: 'inherit'}}>{pane.title}</NavLink>
                        } key={pane.url} closable={pane.closable}/>
                    ))}
                </Tabs>
                <div className="LoginOutlined" onClick={this.handleClear}>
                    <LoginOutlined/>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    tableRouteList: state.getIn(['ucenter', 'tableRouteList'])
});

const mapDispatch = (dispatch) => ({
    initTablesRoutelist (data, opa) {
        dispatch(actionCreators.ucenter.initTablesRoutelist(data, opa));
    }
});
export default connect(mapState, mapDispatch)(withRouter(NavTabs));
