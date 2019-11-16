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

import './App.scss'
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
