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
            <div id="users-table-container">
                <table id="users-table">
                    <thead>
                        <tr>
                            <th className="user-name">Name</th>
                            <th className="user-email">Email</th>
                            <th className="user-view"></th>
                            <th className="user-survey-date">Survey Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user)=> {
                        return < User user={user} key={user.id}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersList;
