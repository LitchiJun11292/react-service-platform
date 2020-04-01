import React from 'react';

class UserManage extends React.Component {
    UNSAFE_componentWillMount () {
        console.log(44);
    }

    render () {
        return (
            <div>用户管理</div>
        )
    }
}

export default UserManage;
