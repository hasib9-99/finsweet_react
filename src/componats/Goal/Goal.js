import React from 'react'
import './goal.css'

export const Goal = () => {
  return (
    <section ClassName="who_we_are">
       <div className="container">
            <div className="goal_improvement">
                <div className="goal">
                    <p className="goal_topic">Who we are</p>
                    <h2 className="goal_hade">Goal focussed</h2>
                    <p className="goal_titel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="improvement">
                    <h2 className="goal_hade">Continuous improvement</h2>
                    <p className="goal_titel">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <img className="who_we_are_banner" src="images/about/who_we_are.png" alt="photo"/>
        </div>
    </section>
  )
}
