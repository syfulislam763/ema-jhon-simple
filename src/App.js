import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import NotFund from './components/NotFund/NotFund';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ShowOff from './components/ShowOff/ShowOff';
import Login from './components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './components/Login/UseAuth';
import Shipment from './components/Shipment/Shipment';



function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
              <Route exact path="/">
                <Shop></Shop>
              </Route>
              <Route path="/shop">
                <Shop></Shop>
              </Route>
              <Route path="/order">
                <Order></Order>
              </Route>
              <Route path="/inventory">
                <Inventory></Inventory>
              </Route>
              <Route path="/showoff">
                <ShowOff></ShowOff>
              </Route>
              <Route path="/Product/:productkey">
                <ProductDetails></ProductDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/Shipment">
                <Shipment></Shipment>
              </PrivateRoute>
              <Route path="*">
                <NotFund></NotFund>
              </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
