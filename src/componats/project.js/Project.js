import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section className="project">
        <div className="container">
            <div className="project_heading">
                <h2>View our projects</h2>
                <a href="#">View More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="card_main">
                <div className="card_left">
                    <img src="images/project_card/Card.png" alt="left_card"/>
                    <div className="card_overlay">
                        <div className="card_inner">
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                            <a href="#">View project <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="card_right">
                    <div className="card_right_top">
                        <img src="images/project_card/card_1.png" alt="card_one"/>
                        <div className="card_top_overlay">
                            <div className="card_top_inner">
                                <h3>Unisaas Website</h3>
                                <h3>Design</h3>
                                <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="card_right_top">
                        <img src="images/project_card/Card_2.png" alt="card_one"/>
                        <div className="card_top_overlay">
                            <div className="card_top_inner">
                                <h3>Unisaas Website</h3>
                                <h3>Design</h3>
                                <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project