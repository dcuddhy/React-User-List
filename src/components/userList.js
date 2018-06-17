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
            currentPage: 1,
        };
    }

    // Function to sort user list
    // TODO This function should be moved to it's own component.
    // NOTE This takes any object as an argument, but we really only need users for now.
    sortList(object, value, order) {
        object.sort(function (a, b) {
            if (a[value] < b[value]) {
                return order === 'asc' ? -1 : 1;
            } else if (a[value] > b[value]) {
                return order === 'asc' ? 1 : -1;
            } else {
                // Object values are equal.
                return 0;
            }
        });
        this.setState({users: object});
        this.setState({completeUsers: object});
        this.setState({usersOrder:  this.state.usersOrder === 'asc' ? 'dsc' : 'asc' });

        // We must paginate after setState for users
        this.paginate(this.state.currentPage);
    }

    paginate(page) {
        // Basic pagination details/setup
        var completeUsersCount = this.state.completeUsers.length,
            itemsPerPage = 9,
            lastPage = Math.ceil(completeUsersCount / itemsPerPage),
            // We will need to know where we were to know where we need to go.
            previousPage = this.state.currentPage,
            // Make a currentPage var, so we can update below and define initialItemIndex
            currentPage;

        // Conditionals to set currentPage upon user interaction
        if (typeof page === 'number'){
            currentPage = page;
            // console.log('YOU CLICKED A NUMBER');
            // console.log('previousPage: ', previousPage);
            // console.log('button: ', page);
            // console.log('currentPage: ', currentPage);
        } else if (page === 'next' && previousPage !== lastPage) {
            currentPage = previousPage + 1;
            // console.log('YOU CLICKED NEXT');
            // console.log('previousPage: ', previousPage);
            // console.log('button: ', page);
            // console.log('currentPage: ', currentPage);
        } else if (page === 'prev' && previousPage !== 1) {
            currentPage = previousPage - 1;
            // console.log('YOU CLICKED PREVIOUS');
            // console.log('previousPage: ', previousPage);
            // console.log('button: ', page);
            // console.log('currentPage: ', currentPage);
        } else {
            // console.log('YOU CANT DO THAT');
            // console.log('previousPage: ', previousPage);
            // console.log('button: ', page);
            // console.log('currentPage: ', currentPage);
            return;
        }

        // We will need these values to splice the array to get only correct items for the page!
        var initialItemIndex = (currentPage - 1) * itemsPerPage,
            finalItemIndex = initialItemIndex + itemsPerPage;

        // Update styles
        document.getElementById(previousPage).classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        if (currentPage === 1) {
            document.getElementById('prev').classList.add('disabled');
        } else if (currentPage === lastPage) {
            document.getElementById('next').classList.add('disabled');
        } else {
            document.getElementById('prev').classList.remove('disabled');
            document.getElementById('next').classList.remove('disabled');
        }

        // Update states
        this.setState({users: this.state.completeUsers.slice(initialItemIndex, finalItemIndex)});
        this.setState({currentPage: currentPage});
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
                <div className="pagination-container">
                    <div id="prev" className="pagination-button disabled" onClick={() => this.paginate('prev')}>PREV</div>
                    <div id="1" className="pagination-button active" onClick={() => this.paginate(1)}>1</div>
                    <div id="2" className="pagination-button" onClick={() => this.paginate(2)}>2</div>
                    <div id="3" className="pagination-button" onClick={() => this.paginate(3)}>3</div>
                    <div id="next" className="pagination-button" onClick={() => this.paginate('next')}>NEXT</div>
                </div>
            </div>
        )
    }
}

export default UsersList;
