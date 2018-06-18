import React from 'react';
import './errorBoundary.css';
import UserListHeader from '../components/userListHeader';



// Error Handling docs
// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo
        });
    }

  render() {
    if (this.state.hasError) {
        return (
            <div>
                < UserListHeader />
                <div className="error-boundary-error">
                    <h1>Something went wrong.</h1>
                </div>
            </div>
        )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
