import React from 'react';
import Logo from './logo'
import '../components/userInfoHeader.css';


class UserInfoHeader extends React.Component {
    render() {
        return (
            <div className="user-info-header-container">
                <div className="user-info-header">
                    <div className="user-list-header-logo">
                        <Logo></Logo>
                    </div>
                    <div className="user-info-header-title">
                        <h1>Dynamo</h1>
                        <h2>Leading General Style</h2>
                        <h3>Styles are six broad areas of behavioral tendencies that give the "big picture" of a person&#39;s behavior.</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfoHeader;
