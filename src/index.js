import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserList from './userList';
import './index.css';

    // NOTE Let's try to not use jQuery.  Use Axios below.
    // Valuable classes associated with styles.  Let's re-use those.
    // var userList = 'http://localhost:3000/api/users';
    // $.getJSON( userList, {
    //     format: 'json'
    // })
    // .done(function( data ) {
    //     $.each( data.data, function( i, d ) {
    //         $( '#users-table' ).append(
    //             '<tr class="user-list-item">' +
    //             '   <td class="user-name">' + JSON.stringify(d['full_name']) + '</td>' +
    //             '   <td class="user-email">' + JSON.stringify(d['email']) + '</td>' +
    //             '   <td class="user-view">' + '[VIEW BUTTON]' + '</td>' +
    //             '   <td class="user-survey-date">' + JSON.stringify(d['survey_date']) + '</td>' +
    //             ' </tr>'
    //         );
    //     });
    // });

class App extends React.Component {
    render() {
        return (
            <div>
                <h1> Users List</h1>
                < UserList users={this.props.users}/>
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
