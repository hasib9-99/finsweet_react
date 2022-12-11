import React from 'react'
import './banner.css'
function Banner() {
  return (
    <section className="banner">
        <div className="container banner_main">
            <div className="banner_texr">
                <h2>Building stellar</h2>
                <h2>websites for early</h2>
                <h2>startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <p>eiusmod tempor incididunt.</p>
                <div className="banner_btn">
                    <ul>
                        <li><a className="btn" href="#">View our work</a></li>
                        <li><a href="#">View Pricing <i className="fa-solid fa-arrow-right"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="banner_img">
                <img src="images/bennar.png" alt="bannar"/>
            </div>
        </div>
    </section>
  )
}

export default Banner