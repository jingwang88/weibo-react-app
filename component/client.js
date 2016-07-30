import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import App from './App';
import MainPage from './MainPage';
import DisPage from './DisPage';
require('../css/font_face.less');
require('../css/main.less');
require('../css/common.less');

render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>``
            <IndexRoute component={MainPage} />
            <Route path='/MainPage' component={MainPage}></Route>
            <Route path='/DisPage' component={DisPage}></Route>
        </Route>
    </Router>
    ), document.getElementById('app'));