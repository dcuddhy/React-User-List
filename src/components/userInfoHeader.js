import React from 'react';
import '../components/userInfoHeader.css';


class UserInfoHeader extends React.Component {
    render() {
        // TODO Logo.svg uses currentColor to fill circle around logo, but it doesn't
        // work when SVGs are rendered this way in an img tag.  A quick fix is to create
        // variations of the logo to hardcode the color we need.  This needs to be refactored
        // to use currentColor as intended.
        return (
            <div className="user-info-header-container">
                <div className="user-info-header">
                    <img alt="Pairin Logo" className="user-info-header-logo" src={require("../assets/icons/Logo_With_White.svg")} />
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
