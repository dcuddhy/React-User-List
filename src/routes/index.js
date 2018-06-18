import React from 'react';
import UserList from '../components/userList';
import UserListHeader from '../components/userListHeader';

class Index extends React.Component {
    render() {
        return (
            <div>
                < UserListHeader />
                < UserList users={this.props.users} />
            </div>
        )
    }
}

export default Index;
