import React from 'react';
import ReactDOM from 'react-dom';
import UserList from '../components/userList';
import '../components/userList.css';

class Index extends React.Component {
    render() {
        return (
            <div>
                < UserList users={this.props.users}/>
            </div>
        )
    }
}

export default Index;
