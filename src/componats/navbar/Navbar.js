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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about_us.html">About us</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a className="btn" href="contact.html">Contact us</a></li>
                </ul>
            </div>
        </div>

    </div>
</nav>
  )
}

export default Navbar