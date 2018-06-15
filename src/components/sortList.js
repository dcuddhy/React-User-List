import React from 'react';
import ReactDOM from 'react-dom';

// NOTE I think it makes a lot of sense to have this as a separate component to
// trigger the sort toggle in the user list, but I'm unable to change state of parent.
// If I handle the sorting in the UserList component, I can move on to the next task.
// In short, this component is well-intended demonstrative cruft.
class SortList extends React.Component {
    sortList(object, value, order) {
        object.sort(function (a, b) {
            if (a[value] < b[value]) {
                return order == 'asc' ? -1 : 1;
            } else if (a[value] > b[value]) {
                return order == 'asc' ? 1 : -1;
            } else {
                // Object values are equal.
                return 0;
            }
        });
        // TODO Figure out how to change state of parent component
        this.setState({users: object});
    }

    render() {
    return (
        <div className="sort-toggle" onClick={() => this.sortList(this.props.object, this.props.value, this.props.order)}>
            <img src={require("./assets/icons/Caret_Up.svg")} />
            <img src={require("./assets/icons/Caret_Down.svg")} />
        </div>
    );
    }
}

export default SortList;
