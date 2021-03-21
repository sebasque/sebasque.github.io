
import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import About from '../about/About';
import Cv from '../cv/Cv';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Portfolio from '../portfolio/Portfolio';
import './App.scss'

export default function App() {

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <About/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/cv'>
          <Cv/>
        </Route>
      </Switch>
      <Footer/>
    </HashRouter>
  );
}