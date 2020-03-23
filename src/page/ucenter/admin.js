import React from 'react';
import { Layout } from 'antd';
import NavLerft from './../../components/NavLerft';
import UcenterHeader from './../../components/Header/ucenterIndex';
import logoTitle from '../../statics/images/logo_title01.png';
import logo from '../../statics/images/logo.png';
import './index.scss';

const { Header, Sider, Content } = Layout;

class Ucenter extends React.Component {

    state = {
        collapsed: false,
    };

    togglecCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout className="ucenter_layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >
                        <img src={this.state.collapsed ? logo : logoTitle}  alt=""/>
                    </div>
                    <NavLerft/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <UcenterHeader
                            collapsed={collapsed}
                            togglecCollapsed={this.togglecCollapsed}
                        />
                    </Header>
                    <Content className="site-layout-background ucenter_content">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Ucenter;
