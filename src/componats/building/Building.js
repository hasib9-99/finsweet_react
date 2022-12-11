import React from 'react'
import './building.css'

const Building = () => {
  return (
    <section className="building_stellar">
            <div class="container building_main">
                <div class="building_banner">
                    <img src="images/upload_thu.png" alt="upload_img"/>
                    <div class="building_overlay">
                        <div class="building_inner">
                            <h2>Building stellar websites for early startups</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                        </div>
                    </div>
                </div>
                <div class="bulding_form">
                    <h2>Send inquiry</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <form action="">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="url" placeholder="Paste your Figma design URL"/>
                        <a class="submit_btn" href="#">Send an Inquiry</a>
                        <a class="form_link" href="#">Get in touch with us <i class="fa-solid fa-arrow-right"></i></a>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Building