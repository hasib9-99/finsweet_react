import React from 'react'
import './work.css'

const Work = () => {
  return (
    <section className="work">
        <div className="container">
            <div className="work_main">
                <div className="work_left">
                    <h2>How we work</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="work_right">
                    <div className="grid_item">
                        <img src="images/card_icon/card1.png" alt="pointer1"/>
                        <h3>Strategy</h3>
                        <p>Euismod faucibus turpis eu gravida mi. pellentesque et velit aliquam .</p>
                    </div>
                    <div className="grid_item">
                        <img src="images/card_icon/card2.png" alt="pointer1"/>
                        <h3>Wireframing</h3>
                        <p>Euismod faucibus turpis eu gravida mi. pellentesque et velit aliquam .</p>
                    </div>
                    <div className="grid_item">
                        <img src="images/card_icon/card3.png" alt="pointer1"/>
                        <h3>Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. pellentesque et velit aliquam .</p>
                    </div>
                    <div className="grid_item">
                        <img src="images/card_icon/card4.png" alt="pointer1"/>
                        <h3>Development</h3>
                        <p>Euismod faucibus turpis eu gravida mi. pellentesque et velit aliquam .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work