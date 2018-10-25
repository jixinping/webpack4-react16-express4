import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Main from './js/Main';

const customHistory = createBrowserHistory();
ReactDOM.render(
    <Router history={customHistory}>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('root')
);