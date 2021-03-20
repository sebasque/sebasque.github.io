

import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, HashRouter
} from 'react-router-dom';

function App() {

  const initialPath = (function () {
    const path = window.location.pathname;
    if (path === '/') {
      return 'ABOUT';
    } else if (path === '/portfolio') {
      return 'PORTFOLIO';
    } else {
      return '';
    }
  })();

  const [watermarkText, setWatermark] = useState(initialPath);

  return (
    <HashRouter>
      <div id="header">
        <nav class="nav">
          <li class="nav-item">
            <img id="nav-logo" src={require('../res/img/logo.png')} alt="Michael Koohang Logo" />
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/" onClick={() => setWatermark("ABOUT")}>About</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/portfolio" onClick={() => setWatermark("PORTFOLIO")}>Portfolio</Link>
          </li>
        </nav>

        <div id="title-container" class="container">
          <h1 id="title">Michael Koohang</h1>
          <h4 id="subtitle">Engineer | Designer | Athlete</h4>
          <div id="social-container">
            <a href="https://github.com/michaelkoohang" target="_blank" rel="noopener noreferrer">
              <img class="social-icon" src={require('../res/img/social/github.png')} alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/michael-koohang-5611ba14a/" target="_blank" rel="noopener noreferrer">
              <img class="social-icon" src={require('../res/img/social/linkedin.png')} alt="LinkeIn logo" />
            </a>
          </div>
        </div>

        <h1 id="watermark">{watermarkText}</h1>

      </div>
      {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <About onClick={() => setWatermark("PORTFOLIO")} />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>

      <footer class="footer">
        <div class="container">
          <div className="flex-footer">
            <p>&copy; Michael Koohang | 2020</p>
            <img className="react-logo" src={require('../res/img/react.png')} alt="React" />
          </div>
        </div>
      </footer>
    </HashRouter>
  );
}

export default App;