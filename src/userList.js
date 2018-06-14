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
            <div id="user-table-container">
                <table id="user-table">
                    <thead>
                        <tr>
                            <th className="user-name">
                                Name
                                <div className="sort-toggle">
                                    <img src={require("./assets/icons/Caret_Up.svg")} />
                                    <img src={require("./assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-email">
                                Email
                                <div className="sort-toggle">
                                    <img src={require("./assets/icons/Caret_Up.svg")} />
                                    <img src={require("./assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-view"></th>
                            <th className="user-survey-date">
                                Survey Date
                                <div className="sort-toggle">
                                    <img src={require("./assets/icons/Caret_Up.svg")} />
                                    <img src={require("./assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
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
