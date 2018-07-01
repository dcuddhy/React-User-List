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
            if (order === 'asc') {
                return a[value].localeCompare(b[value]);
            } else {
                return -a[value].localeCompare(b[value]);
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
        }).catch(function() {
            console.log("Fetching data failed at UserList.componentDidMount()");
        });
    }

    // We should break this down more into components - something like:
    // thead : <sortingLabels >, tbody : <User />, below (or separate) : <Pagination />
    render() {
        return (
            <div id="user-table-container">
                <table id="user-table">
                    <thead>
                        <tr>
                            <th className="user-name">
                                Name
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'full_name', this.state.usersOrder)}>
                                    <img alt="toggle sort order by name" src={require("../assets/icons/Caret_Up.svg")} />
                                    <img alt="toggle sort order by name" src={require("../assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-email">
                                Email
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'email', this.state.usersOrder)}>
                                    <img alt="toggle sort order by email" src={require("../assets/icons/Caret_Up.svg")} />
                                    <img alt="toggle sort order by email" src={require("../assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                            <th className="user-view"></th>
                            <th className="user-survey-date">
                                Survey Date
                                <div className="sort-toggle" onClick={() => this.sortList(this.state.completeUsers, 'survey_date', this.state.usersOrder)}>
                                    <img alt="toggle sort order by survey date" src={require("../assets/icons/Caret_Up.svg")} />
                                    <img alt="toggle sort order by survey date" src={require("../assets/icons/Caret_Down.svg")} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user)=> {
                            return <User user={user} key={user.id} />
                        })}
                    </tbody>
                </table>
                {/* Pagination should absolutely be moved to its own component. */}
                <div className="pagination-container">
                    <div id="prev" className= {(this.state.currentPage === 1 ? 'disabled ' : ' ') + 'pagination-button'} onClick={() => this.paginate('prev')}>PREV</div>
                    <div id="1" className= {(this.state.currentPage === 1 ? 'active ' : ' ') + 'pagination-button'} onClick={() => this.paginate(1)}>1</div>
                    <div id="2" className= {(this.state.currentPage === 2 ? 'active ' : ' ') + 'pagination-button'} onClick={() => this.paginate(2)}>2</div>
                    <div id="3" className= {(this.state.currentPage === 3 ? 'active ' : ' ') + 'pagination-button'} onClick={() => this.paginate(3)}>3</div>
                    <div id="next" className= {(this.state.currentPage === 3 ? 'disabled ' : ' ') + 'pagination-button'} onClick={() => this.paginate('next')}>NEXT</div>
                </div>
            </div>
        )
    }
}

export default UsersList;
