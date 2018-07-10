import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Order from './Order';
import Social from './Social';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/order' component={Order}/>
      <Route exact path='/social' component={Social}/>
    </Switch>
  </main>
)

export default Main;
