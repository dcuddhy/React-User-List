import React from 'react';
import User from './user';

// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import axios from 'axios';
// import UsertList from './userList';
// import './index.css';

class UsersList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.users.map((user)=> {
                    return < User user={user} key={user.id}/>
                })}
            </ul>
        )
    }
}

export default UsersList;
