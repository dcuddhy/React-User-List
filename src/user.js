import React from 'react';

class User extends React.Component {
    render() {
        return (
            <tr class="user-list-item">
                <td className="user-name">
                    {this.props.user.full_name}
                </td>
                <td className="user-email">
                    {this.props.user.email}
                </td>
                <td className="user-view">
                    [ VIEW BUTTON ]
                </td>
                <td className="user-survey-date">
                    {this.props.user.survey_date}
                </td>
            </tr>
        )
    }
}

export default User;
