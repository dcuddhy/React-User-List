import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';

    var userList = 'http://localhost:3000/api/users';
    $.getJSON( userList, {
        format: 'json'
    })
    .done(function( data ) {

    $.each( data.data, function( i, d ) {
        $( '#users-table' ).append(
            '<tr class="user-list-item">' +
            '   <td class="user-name">' + JSON.stringify(d['full_name']) + '</td>' +
            '   <td class="user-email">' + JSON.stringify(d['email']) + '</td>' +
            '   <td class="user-view">' + '[VIEW BUTTON]' + '</td>' +
            '   <td class="user-survey-date">' + JSON.stringify(d['survey_date']) + '</td>' +
            ' </tr>'
        );
    });
    });
