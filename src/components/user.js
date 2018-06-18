import React from 'react';


class User extends React.Component {
    prettyDate() {
        var date = new Date(this.props.user.survey_date),
            fullYear = date.getFullYear(),
            dayNumber = date.getDate(),
            month = date.getMonth(),
            monthsArray =   ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"],
            monthString = monthsArray[month];

        var prettyDate = monthString + ' ' + dayNumber + ', ' + fullYear;

        return prettyDate;
    }

    render() {
        return (
            <tr className="user-list-item">
                <td className="user-name">
                    {this.props.user.full_name}
                </td>
                <td className="user-email">
                    {this.props.user.email}
                </td>
                <td className="user-view">
                    {/* Buttons come with clunky defualt styles.  Let's just use a div. */}
                    <div className="user-view-button">
                        View
                    </div>
                </td>
                <td className="user-survey-date">
                    {this.prettyDate()}
                </td>
            </tr>
        )
    }
}

export default User;
