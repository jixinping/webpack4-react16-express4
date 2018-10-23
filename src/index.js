import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import Main from './js/Main';
import Lists from './js/Lists.js';
import PutArtical from './js/PutArtical.js';
import AboutMe from './js/AboutMe.js';
import Detile from './js/Detile.js';

const customHistory = createBrowserHistory();
ReactDOM.render(
    <Router history={customHistory}>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('root')
);