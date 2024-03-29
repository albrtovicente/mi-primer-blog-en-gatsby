// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
 return (
   <Layout pageTitle='Pagina inicio'>
    <h1>Aqui estaran proximamente nuestras entradas de blog</h1>
    <StaticImage src="../images/monumento.jpg" alt='' />
   </Layout>
 )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>


// Step 3: Export your component
export default IndexPage

