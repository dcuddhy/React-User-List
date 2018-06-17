import React from 'react';
import User from './user';
import '../components/userList.css';


class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            completeUsers: [],
            currentPage: 1,
            itemsPerPage: 9
        };
    }

    // Function to sort user list
    // NOTE This takes any object as an argument, but we really only need users for now.
    // TODO Maybe we should use something like Browserify to export/require functions in the future.
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

    // TODO Pagination should absolutely be moved to its own component.
    paginate(page) {
        // Basic pagination details/setup
        var completeUsersCount = this.state.completeUsers.length,
            itemsPerPage = this.state.itemsPerPage,
            lastPage = Math.ceil(completeUsersCount / itemsPerPage),
            // We will need to know where we were to know where we need to go.
            previousPage = this.state.currentPage,
            // Make a currentPage var, so we can update below and define initialItemIndex
            currentPage;

        // Conditionals to set currentPage upon user interaction
        if (typeof page === 'number'){
            currentPage = page;
        } else if (page === 'next' && previousPage !== lastPage) {
            currentPage = previousPage + 1;
        } else if (page === 'prev' && previousPage !== 1) {
            currentPage = previousPage - 1;
        } else {
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
            // Complete list of users of all users
            let completeUsers = data.data;
            this.setState({completeUsers: completeUsers});

            // Partial list of users to render as paginated
            let paginatedUsers = data.data.slice(0, this.state.itemsPerPage);

            this.setState({users: paginatedUsers});
            this.setState({usersOrder: 'asc'});
        })
    }

    // We should break this down more into components - something like:
    // thead : <sortingLabels >, tbody : < User />, below (or separate) : < Pagination />
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
                            return < User user={user} key={user.id} />
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
