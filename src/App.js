import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import './App.css';

const HatsPage = () => {
  return <h1>Hats</h1>;
};

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;
