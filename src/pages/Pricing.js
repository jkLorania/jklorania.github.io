import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Main';
import Pricing from './Pricing';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/pricing' component={Pricing}></Route>
    </Routes>
  );
}

export default Main;