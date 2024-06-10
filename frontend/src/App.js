import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </div>
);

export default App;