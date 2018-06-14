import React from 'react';

class User extends React.Component {
    render() {
        return (
            <li>
                {this.props.user.full_name} {this.props.user.email} {this.props.user.survey_date}
            </li>
        )
    }
}

export default User;
