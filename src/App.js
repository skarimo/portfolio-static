import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="main-body">
          <Header />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0.01 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper">
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/" component={Home} />
          </AnimatedSwitch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
