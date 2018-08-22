import React from 'react';
// import logo from './logo.svg';
import {Route, Switch} from 'react-router';
import Home from './components/pages/Home';
import Favourite from './components/pages/Favourite';
import Configs from './components/pages/Configurations';

const App = () => {
  return  (
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route path='/Favourite' component = {Favourite}/>
      <Route path='/Configurations' component = {Configs}/>
    </Switch> 
  )
}

export default App;
