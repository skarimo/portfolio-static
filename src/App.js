import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Menu />
            <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
    className="switch-wrapper"
  >
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/" component={Home} />
          </AnimatedSwitch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
