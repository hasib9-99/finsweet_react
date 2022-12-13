import React from 'react'
import './working.css'


const Working = () => {
  return (
    <section className='working'>
        <div className="container working_main">
            <h2>The benefits of working with us</h2>
            <div className="working_cards">
                <div className="working_card">
                    <img src="images/about/working_icon/Icon_1.png" alt="logo1"/>
                    <h4>Customize with ease</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="working_card">
                    <img src="images/about/working_icon/Icon_2.png" alt="logo1"/>
                    <h4>Perfectly Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="working_card">
                    <img src="images/about/working_icon/Icon_3.png" alt="logo1"/>
                    <h4>Friendly Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>

            </div>
        </div>

        <div className="container working_nav">
            <div className="count">
                <h2>100.000+</h2>
                <p>Finsweet Users</p>
            </div>
            <div className="working_logo">
                <ul>
                    <li><img src="images/about/working_icon/Logo_1.png" alt="logo"/></li>
                    <li><img src="images/about/working_icon/Logo_2.png" alt="logo"/></li>
                    <li><img src="images/about/working_icon/Logo_3.png" alt="logo"/></li>
                    <li><img src="images/about/working_icon/Logo_4.png" alt="logo"/></li>
                    <li><img src="images/about/working_icon/Logo_5.png" alt="logo"/></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Working