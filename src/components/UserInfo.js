import React from 'react'
import Headshot from './headshot.png'
import gitHubIcon from './icons/github-icon.png'
import linkedInIcon from './icons/linkedin-icon.png'
import mediumIcon from './icons/medium-icon.png'

const UserInfo = (props) => {

  const linkedInLink = "https://www.linkedin.com/in/sherzod-karimov-869625160/"
  const gitHubLink = "https://github.com/skarimo"
  const mediumLink = "https://medium.com/@karimovj"

    return (
      <div className="user info"
        style={{
          display: 'fixed',
          height: '100vh',
          width: '30%'
        }}
        >
        <div class="headshot links" style={{
          display: 'block',
          padding: '10px 10px 10px 10px',
          border: '1px solid #BFBFBF',
          margin: '10px',
          backgroundColor: 'white',
          // boxShadow: '0px 0px 5px 3px rgba(0,0,0,0.75)',
          }}>

          <img id='headshot' src={Headshot} style={{width: '80%'}}/>
            <span class="sidenav" style={{
                display: 'flex',
                flexFlow: 'column',
                float: 'right',
                bottom: '0',

              }}>
              <a href={linkedInLink}><img className="social-logo" src={linkedInIcon} alt="linkedin-logo" style={{width: '50px'}}/></a>
              <a href={mediumLink}><img className="social-logo" src={mediumIcon} alt="medium-logo" style={{width: '50px'}}/></a>
              <a href={gitHubLink}><img className="social-logo" src={gitHubIcon} alt="github-logo" style={{width: '50px'}}/></a>
            </span>
        </div>
        <div style={{
            padding: '10px 10px 10px 10px',
            border: '1px solid #BFBFBF',
            margin: '10px',
          }}>
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
      </div>
    )
  }

export default UserInfo
// <div class="polaroid rotate_right">
//   <img src="pulpitrock.jpg" alt="Pulpit rock" width="284" height="213">
//   <p class="caption">The pulpit rock in Lysefjorden, Norway.</p>
// </div>
