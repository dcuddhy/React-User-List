import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/errorBoundary';
import Routes from './routes';
import Index from './routes/index';
import Info from './routes/info';
import './index.css';


ReactDOM.render(
    <ErrorBoundary>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/info" exact component={Info} />
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)

export default Routes;
