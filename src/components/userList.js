import React from 'react';
import User from './user';
import '../components/userList.css';


class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            completeUsers: [],
            //TODO We will need some version of pageNumber to track current page
            // Think, when user goes to page 2, and sorts.  User should remain on page two
            // and view new indexes 10-19
            // currentPage: 1
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
        this.setState({completeUsers: object});
        this.setState({usersOrder:  this.state.usersOrder == 'asc' ? 'dsc' : 'asc' });
    }

    paginate(page) {
        var pageNumber = page;
        var itemsPerPage = 9;
        var initialItemIndex = (page - 1) * itemsPerPage;
        var finalItemIndex = initialItemIndex + itemsPerPage;

        // This is really only useful for debugging
        var itemRange = initialItemIndex.toString() + " - " + finalItemIndex.toString();

        console.log('this.state.users: ', this.state.users);
        console.log('this.state: ', this.state.completeUsers.slice(initialItemIndex, finalItemIndex));
        console.log('itemRange: ', itemRange);
        // console.log('initialItemIndex: ', initialItemIndex);
        this.setState({users: this.state.completeUsers.slice(initialItemIndex, finalItemIndex)});

    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
        .then(results => {
            return results.json();
        }).then(data => {
            let users = data.data;
            this.setState({completeUsers: users});

            users = data.data.slice(0, 9);
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
                <div onClick={() => this.paginate(1)}>1</div>
                <div onClick={() => this.paginate(2)}>2</div>
                <div onClick={() => this.paginate(3)}>3</div>
                <div onClick={() => this.paginate(4)}>4</div>
                <table id="user-table">
                    <thead>
                        <tr>
                            <th className="user-name">
                                Name
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'full_name', this.state.usersOrder)}>
                                    <img src={require("../assets/icons/Caret_Up.svg")} />
                                    <img src={require("../assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-email">
                                Email
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'email', this.state.usersOrder)}>
                                    <img src={require("../assets/icons/Caret_Up.svg")} />
                                    <img src={require("../assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-view"></th>
                            <th className="user-survey-date">
                                Survey Date
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'survey_date', this.state.usersOrder)}>
                                    <img src={require("../assets/icons/Caret_Up.svg")} />
                                    <img src={require("../assets/icons/Caret_Down.svg")} />
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
