import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Projects = () => (
  <Layout>
    <SEO title="Page 3" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
