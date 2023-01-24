import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <nav>
    <div className="container">
        <div className="main">
            <div className="logo">
                <a href="#"><img src="images/logo.png" alt="logo"/></a>
            </div>
            <div className="menu">
                <ul>
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/about">About us</a></li>
                    <li> <a href="/features">Features</a></li>
                    <li> <a href="/pricing">Pricing</a></li>
                    <li> <a href="/faq">FAQ</a></li>
                    <li> <a href="/blog">Blog</a></li>
                    <li> <a className="btn" href="/contactPage">Contact us</a></li>
                </ul>
            </div>
        </div>

    </div>
</nav>
  )
}

export default Navbar