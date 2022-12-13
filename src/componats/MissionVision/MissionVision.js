import React from 'react'
import './Mission-Vision.css'

const MissionVision = () => {
  return (
    <section className="mission_vission">
        <div className="container ">
            <div className="flex_box margin_box">
                <div className="flex_hade">
                    <p className="topic">Our Mission</p>
                    <h4>Inspire, Innovate, Share</h4>
                    <p className="flex_titel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex_img">
                    <img src="images/about/our_mission.png" alt="mission_photo"/>
                </div>
            </div>
            <div className="flex_box">
                <div className="flex_hade">
                    <img src="images/about/our_vision.png" alt="vission_photo"/>
                </div>
                <div className="flex_hade">
                    <p className="topic">Our Mission</p>
                    <h4>Inspire, Innovate, Share</h4>
                    <p className="flex_titel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MissionVision