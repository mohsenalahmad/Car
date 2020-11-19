import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Car from '../pages/Car';
import Messages from '../pages/Messages';
import Notifications from '../pages/Notifications';
import Favourites from '../pages/Favourites';
import ShoppingCart from '../pages/ShoppingCart';
import PersonIcon from '../pages/PersonIcon';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Car" component={Car} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Notifications" component={Notifications} />
        <Route path="/Favourites" component={Favourites} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
        <Route path="/PersonIcon" component={PersonIcon} />
      
      </Switch>
    </BrowserRouter>

  );
}

export default App;
