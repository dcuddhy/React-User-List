import React from 'react';
// import ReactDOM from 'react-dom';
// import $ from 'jquery';
// import axios from 'axios';
// import UsertList from './userList';
// import './index.css';

class User extends React.Component {
    render() {
        return (
            <li>
                {this.props.user.name} {this.props.user.phone}
            </li>
        )
    }
}

export default User;
