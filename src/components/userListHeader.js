import React from 'react';
import Logo from './logo'
import '../components/userListHeader.css';

class UserListHeader extends React.Component {
    render() {
        // TODO I'm having trouble rendering the Logo as an SVG.  I figure if I
        // put the SVG code into it's own render, I can still use currentColor.
        // This solution is good but not great.  Figure out how to render SVG
        // in a way that we can continue to use currentColor.
        return (
            <div className="user-list-header-container">
                <div className="user-list-header">
                    <div className="user-list-header-logo">
                        <Logo></Logo>
                    </div>
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
