import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './home';

const customHistory = createBrowserHistory();
ReactDOM.render(
    <Router history={customHistory}>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('root')
);