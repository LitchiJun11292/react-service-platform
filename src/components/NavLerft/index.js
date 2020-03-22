import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class NavLerft extends React.Component {

    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <UserOutlined />
                    <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <VideoCameraOutlined />
                    <span>nav 2</span>
                </Menu.Item>

                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <MailOutlined />
                            <span>Navigation One</span>
                        </span>
                    }>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default  NavLerft;
