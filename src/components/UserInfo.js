import React from 'react'
import Headshot from './headshot.png'

const UserInfo = (props) => {
    return (
      <div className="main-body-home"
        style={{
          display: 'fixed',
          height: '100vh',
          width: '30%'
        }}
        >
        <img id='headshot'src={Headshot} style={{
            width: '80%'
          }}/>

        <p> lorem Ita tamen proident, export officia ut appellat. Eu incididunt sed expetendis ex
        ea legam probant laboris, aliquip labore quem deserunt sint ab nam in veniam
        sunt aute, pariatur cillum sunt pariatur tamen o an elit laboris et laborum ne
        pariatur, se velit quid nisi eiusmod. Deserunt legam quae mentitum quorum.Dolor
        o fabulas ea noster, nisi ita ut fugiat eiusmod ita tamen iis doctrina ut
        multos, hic cillum ea multos. Possumus quo sint arbitror, ne quem anim nam
        singulis. Aliquip quid de litteris concursionibus. Nulla consectetur doctrina
        sunt aliquip, nescius firmissimum est consequat te culpa possumus excepteur,
        expetendis o nescius est excepteur culpa arbitror ubi veniam ullamco voluptate
        ne do fore fidelissimae an laboris noster ullamco.  </p>
      </div>
    )
  }

export default UserInfo