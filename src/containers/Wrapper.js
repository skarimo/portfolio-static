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
           flexDirection: 'column',
           maxWidth: '67%',
           padding: '10px 10px 10px 10px',
           border: '1px solid #BFBFBF',
           margin: '10px',
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
