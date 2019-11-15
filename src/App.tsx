import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Simulacao,
  SelectUser,
  Overview,
  Finish,
  Details,
} from './pages'

import Header from './components/Header';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Simulacao} />
          <Route path='/selectUser' component={SelectUser} />
          <Route path='/overview' component={Overview} />
          <Route path='/finish' component={Finish} />
          <Route path='/details' component={Details} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
