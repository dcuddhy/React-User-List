import React from 'react';
import User from './user';
import '../components/userList.css';


class UsersListTableHead extends React.Component {
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
    sortList(object, value, order) {
        this.props.sortList(object, value, order);
    }

    // TODO We'll need to create an array of sorting objects to iterate or map
    // through in the render below
    render() {
        return (
            <thead>
                <tr>
                    <th className="user-name">
                        Name
                        <div className="sort-toggle" onClick={() => this.sortList(this.props.completeUsers, 'full_name', this.props.usersOrder)}>
                            <img alt="toggle sort order by name" src={require("../assets/icons/Caret_Up.svg")} />
                            <img alt="toggle sort order by name" src={require("../assets/icons/Caret_Down.svg")} />
                        </div>
                    </th>
                    <th className="user-email">
                        Email
                        <div className="sort-toggle" onClick={() => this.sortList(this.props.completeUsers, 'email', this.props.usersOrder)}>
                            <img alt="toggle sort order by email" src={require("../assets/icons/Caret_Up.svg")} />
                            <img alt="toggle sort order by email" src={require("../assets/icons/Caret_Down.svg")} />
                        </div>
                    </th>
                    <th className="user-view"></th>
                    <th className="user-survey-date">
                        Survey Date
                        <div className="sort-toggle" onClick={() => this.sortList(this.props.completeUsers, 'survey_date', this.props.usersOrder)}>
                            <img alt="toggle sort order by survey date" src={require("../assets/icons/Caret_Up.svg")} />
                            <img alt="toggle sort order by survey date" src={require("../assets/icons/Caret_Down.svg")} />
                        </div>
                    </th>
                </tr>
            </thead>
        )
    }
}

export default UsersListTableHead;
