import * as React from 'react'
import { Link } from 'gatsby'
// import { container } from '../components/layout.modules.css./'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
 } from './layout.modules.css'

const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
            <li className={navLinkItem}><Link className={navLinkText} to="/sobremi">Sobre mi</Link></li>
            <li className={navLinkItem}><Link className={navLinkText} to="/blog">Blog</Link></li>

          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
          <footer>
            <p className='footer'>&copy; albrtovicente {new Date().getFullYear()}</p> 
          </footer>
        </main>
        
      </div>
    )
   }
   
   
   export default Layout