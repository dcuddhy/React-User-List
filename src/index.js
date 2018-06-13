import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
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




axios.get('http://localhost:3000/api/users')
  .then(function (response) {
    // console.log(response);
    // console.log(response.data.data);
    var userListData = response.data.data;
    // let users = response.data.data;  //TODO: Make these users available instead of static below.
    console.log('users0: ', users)
    userListData.map(function(user){
        // console.log('user: ', user);
    })
  })
  .catch(function (error) {
    console.log(error);
  });


// based on tutorials here:
// https://www.youtube.com/watch?v=adDTtcmF7W8
// https://www.youtube.com/watch?v=It9iL4EXFWc
let users =  [{
            id: 1,
            full_name: "bill burr",
            name: "bill",
            phone: "111-111-1111"
        }, {
            id: 2,
            full_name: "randy ray",
            name: "randy",
            phone: "222-222-2222"
        }, {
            id: 3,
            full_name: "mark maron",
            name: "mark",
            phone: "333-333-3333"
        }]

class App extends React.Component {
    render() {
        console.log('users1: ', this.props.users);
        return (
            <div>
                <h1> Users List</h1>
                < UserList users={this.props.users}/>
            </div>
        )
    }
}



ReactDOM.render(
  <App users={users} />,
  document.getElementById('app')
);
