
import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function App() {

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <About/>
          <Portfolio/>
        </Route>
      </Switch>
      <Footer/>
    </HashRouter>
  );
}