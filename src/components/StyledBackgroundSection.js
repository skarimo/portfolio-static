import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "background-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.data.placeholderImage.childImageSharp.fluid
       const imageData = data.desktop.childImageSharp
       console.log(imageData.fluid)
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData.fluid}
                           backgroundColor='Blue'
          >
            <h1>Hello gatsby-background-image</h1>
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: repeat-y;
`

export default StyledBackgroundSection
