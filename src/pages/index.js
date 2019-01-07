import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Curiosity is the wick in the candle of learning. -William Arthur Ward</h3>
    <p>{bio}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
      <Image imageProp="gatsby-astronaut.png"/>
    </div>
  </Layout>
)

const bio = "The quote above by Ward really resonates with me. After all, curiosity is what led me to find my passion for programming. It began with a simple search, 'Hello World', the infamous first application of any beginner developer. This very search is what steered me into the world of programming where I managed to utilize my analytical, creative, and problem solving skills, derived from my background in Behavioral Therapy and Loss Prevention, to solidify and grow my knowledge of programming to a stage where I can proudly call myself a Software Developer and nevertheless, a Curious Learner. "

export default IndexPage
