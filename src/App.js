import React, { Component } from 'react';
import './App.css';

import Wrapper from './containers/Wrapper'

class App extends Component {
  render() {
    return (
      <Wrapper />
    );
  }
}

export default App;



// <BrowserRouter>
//   <div id="main-body">
//     <Header />
//       <AnimatedSwitch
//         atEnter={{ opacity: 0 }}
//         atLeave={{ opacity: 0.01 }}
//         atActive={{ opacity: 1 }}
//         className="switch-wrapper">
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/projects" component={Projects} />
//           <Route path="/" component={Home} />
//     </AnimatedSwitch>
//   </div>
// </BrowserRouter>
//
