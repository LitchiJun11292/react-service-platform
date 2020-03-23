import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from 'antd';
import MenConfig from './../../utils/menuConfig';
import * as constants from './../../utils/constants.js';
import {
    UserOutlined,
    VideoCameraOutlined,
    MailOutlined,
} from '@ant-design/icons';

const {SubMenu} = Menu;

class NavLerft extends React.Component {

    render () {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {this.state.menuTreeNode}
            </Menu>
        );
    }

    UNSAFE_componentWillMount () {
        const menuTreeNode = this.renderMenu(MenConfig['college']);
        this.setState({
            menuTreeNode
        });
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item, index) => {
            if (item.children && item.children.length > 0) {
                return (
                    <SubMenu
                        key={index}
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
    }
}

export default NavLerft;
