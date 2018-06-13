import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.css';


    ReactDOM.render(
      <div>Hello, world!</div>,
      document.getElementById('root')
    );


    var userList = 'http://localhost:3000/api/users';
    $.getJSON( userList, {
        format: 'json'
    })
    .done(function( data ) {
      $.each( data.data, function( i, d ) {
        $( '#users' ).append('<div>' + JSON.stringify(d) + ' </div>');
      });
    });
