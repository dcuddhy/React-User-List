import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './userList';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                < UserList users={this.props.users} />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
