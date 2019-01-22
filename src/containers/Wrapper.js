import React, { Component } from 'react'

import Contact from '../components/Contact'
import UserInfo from '../components/UserInfo'
import Projects from '../components/Projects'

class Wrapper extends Component {
  constructor() {
    super()
    this.state = {
      test: "test"
    }
  }

  render() {
    return(
     <div className='wrapper' style={{
         display: 'flex',
         flexDirection: 'row',
         flexWrap: 'wrap'
        }}>
       <UserInfo />
       <div className='body-wrapper' style={{
           display: 'flex',
           flexDirection: 'row',
           flexWrap: 'wrap',
           width: '70%'
          }}
           >
          <Projects />
          <Contact />
       </div>
     </div>
    )
  }

}

export default Wrapper
