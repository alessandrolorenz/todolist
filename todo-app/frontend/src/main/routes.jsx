import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <route path='/todos' component={Todo} />
        <route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)
