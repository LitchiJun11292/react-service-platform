import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, Avatar} from 'antd';
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './ucenterIndex.scss';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DownOutlined
} from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/front">基本信息</Link>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="1">
            <Link to="/login">设置</Link>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="1">
            <Link to="/login">退出</Link>
        </Menu.Item>
    </Menu>
);

class UcenterHeader extends React.Component {

    render() {
        const {collapsed, togglecCollapsed} = this.props;
        return (
            <div className={"ucenter_header"}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: togglecCollapsed,
                })}
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
                <div className="right_menu">
                    <Avatar style={{backgroundColor: '#87d068'}}
                            size="small"
                            icon={<UserOutlined/>}/>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <DownOutlined/>
                        </a>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default UcenterHeader;
