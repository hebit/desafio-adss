import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import {
//   Home,
//   Simulacao,
//   SelectUser,
//   Overview,
//   Finish,
//   Details,
// } from './pages/index'

import Home from './pages/Home';
import Simulacao from './pages/Simulacao';
import SelectUser from './pages/SelectUser';
import Overview from './pages/Overview';
import Finish from './pages/Finish';
import Details from './pages/Details';

import Header from './components/Header';

import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/simulacao' component={Simulacao} />
          <Route path='/selectUser' component={SelectUser} />
          <Route path='/overview' component={Overview} />
          <Route path='/finish' component={Finish} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
