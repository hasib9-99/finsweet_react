import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about_us">
            <div class="container about_main">
                <div class="about_hade">
                    <h2>What our clients say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div class="about_slider">
                    <i class="fa-solid fa-chevron-left next"></i>
                    <i class="fa-solid fa-chevron-right prev"></i>
                    <div class="slick_client">
                        <div class="client_right_main">
                            <h2>"The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                            <div class="clinet_inner">
                                <div class="client_img">
                                    <img src="images/client.png" alt="claint"/>
                                </div>
                                <div class="clinet_text">
                                    <h2>Jenny Wilson</h2>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="client_right_main">
                            <h2>"The best agency we've worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                            <div class="clinet_inner">
                                <div class="client_img">
                                    <img src="images/client.png" alt="claint"/>
                                </div>
                                <div class="clinet_text">
                                    <h2>Jenny Wilson</h2>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About