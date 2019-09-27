import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';

const Counter = () => <div>counter!</div>;

ReactDOM.render(
  <Router>
    <Route path='/' component={App} exact />
    <Route path='/counter' component={Counter} exact />
  </Router>,
  document.getElementById('root'),
);