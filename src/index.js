import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import Index from './routes/index';
import Info from './routes/info';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/home" exact component={Info} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

export default Routes;
