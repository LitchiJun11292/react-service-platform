import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.scss';
import {setUserLogin} from "./store/actionCreators";

class Login extends React.Component {
    render () {
        const { token } = this.props;
        if (!token) {
            return (
                <div className="ucenter_login">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="mobile"
                            rules={[{required: true, message: 'Please input your Username!'}]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{required: true, message: 'Please input your Password!'}]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a className="login-form-forgot" href="/">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="/">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            )
        } else {
            return <Redirect to="/ucenter"/>
        }
    }

    onFinish = values => {
        this.props.setUserLogin();
        // console.log('Received values of form: ', values);
    };
}

const mapState = (state) => ({
    token: state.getIn(['login', 'token'])
});

const mapDispatch = (dispatch) => ({
    setUserLogin () {
        dispatch(setUserLogin());
    }
});

export default connect(mapState, mapDispatch)(Login);
