import React from 'react';
import User from './user';


class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }

    // Function to sort user list
    // TODO This function should be moved to it's own component.
    // NOTE This takes any object as an argument, but we really only need users for now.
    sortList(object, value, order) {
        object.sort(function (a, b) {
            if (a[value] < b[value]) {
                return order == 'asc' ? -1 : 1;
            } else if (a[value] > b[value]) {
                return order == 'asc' ? 1 : -1;
            } else {
                // Object values are equal.
                return 0;
            }
        });

        this.setState({users: object});
        this.setState({usersOrder:  this.state.usersOrder == 'asc' ? 'dsc' : 'asc' });
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
        .then(results => {
            return results.json();
        }).then(data => {
            let users = data.data;
            let usersOrder = '';

            this.setState({users: users});
            this.setState({usersOrder: 'asc'});
        })
    }

    // TODO When sorting is moved out to it's own component, we will call the sort-toggle element like this:
    // <SortList object={this.state.users} value="full_name" order={this.state.usersOrder} />
    render() {
        return (
            <div id="user-table-container">
                <table id="user-table">
                    <thead>
                        <tr>
                            <th className="user-name">
                                Name
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.users, 'full_name', this.state.usersOrder)}>
                                    <img src={require("./assets/icons/Caret_Up.svg")} />
                                    <img src={require("./assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-email">
                                Email
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.users, 'email', this.state.usersOrder)}>
                                    <img src={require("./assets/icons/Caret_Up.svg")} />
                                    <img src={require("./assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-view"></th>
                            <th className="user-survey-date">
                                Survey Date
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.users, 'survey_date', this.state.usersOrder)}>
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
