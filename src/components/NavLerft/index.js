import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Menu} from 'antd';
import MenConfig from './../../utils/menuConfig';
import {
    MailOutlined,
} from '@ant-design/icons';
import {actionCreators} from "../../store/reducer";

const {SubMenu} = Menu;

class NavLerft extends React.Component {

    state = {
        selectedKeys: '/ucenter/collectInformation',
        openKeys: [],
    };

    onOpenChange = openKeys => {
        console.log(openKeys);
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
    };

    UNSAFE_componentWillMount () {
        const menuTreeNode = this.renderMenu(MenConfig['college']);
        let openKeys = this.props.location.pathname.split('/');
        let obj = MenConfig['college'][0];
        obj.closable = false;
        this.props.initTablesRoutelist(obj);
        this.setState({
            menuTreeNode,
            openKeys: [openKeys[2]]
        });
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu
                        key={item.url}
                        title={
                            <span>
                                <MailOutlined/>
                                <span>{item.title}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.url}>
                        {item.title === '办事大厅' ? <MailOutlined/> : ''}
                        <span>
                            <NavLink to={item.url} style={{color: 'inherit'}}>{item.title}</NavLink>
                        </span>
                    </Menu.Item>
                )
            }
        })
    };

    // 派发tabsList
    handleUpdateTabList = ({item, key, keyPath, domEvent}) => {
        this.props.initTablesRoutelist({
            title: item.node.innerText,
            url: key
        });
    };

    render () {
        return (
            <Menu theme="dark" mode="inline"
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
                  selectedKeys={this.props.location.pathname}
                  onClick={this.handleUpdateTabList}
                  defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}
            </Menu>
        );
    }
}

const mapDispatch = (dispatch) => ({
    initTablesRoutelist (data) {
        dispatch(actionCreators.ucenter.initTablesRoutelist(data));
    }
});
export default connect(null, mapDispatch)(withRouter(NavLerft));
