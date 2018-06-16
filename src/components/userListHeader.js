import React from 'react';
import '../components/userListHeader.css';
import Foobar from '../components/userListHeader.css';

class UserListHeader extends React.Component {
    render() {
        // TODO Logo.svg uses currentColor to fill circle around logo, but it doesn't
        // work when SVGs are rendered this way in an img tag.  A quick fix is to create
        // variations of the logo to hardcode the color we need.  This needs to be refactored
        // to use currentColor as intended.
        return (
            <div className="user-list-header-container">
                <div className="user-list-header">
                    <img className="user-list-header-logo" src={require("../assets/icons/Logo_With_White.svg")} />
                    <div className="user-list-header-title">
                        PAIRIN <br />
                        <span>INFORM</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserListHeader;
