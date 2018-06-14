import React from 'react';
import User from './user';

class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
        .then(results => {
            return results.json();
        }).then(data => {
            let users = data.data;
            this.setState({users: users});
        })
    }

    render() {
        return (
            <ul>
                {this.state.users.map((user)=> {
                    return < User user={user} key={user.id}/>
                })}
            </ul>
        )
    }
}

export default UsersList;
