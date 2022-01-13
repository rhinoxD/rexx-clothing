import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
