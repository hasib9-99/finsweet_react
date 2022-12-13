import React from 'react'
import './meet.css'

const Meet = () => {
  return (
    <section className="team">
        <div className="container team_main">
            <h2>Meet our team</h2>
            <div className="team_cards">
                <div className="team_card">
                    <img src="images/about/team/1.png" alt="team"/>
                    <h4>John Smith</h4>
                    <p>CEO</p>
                </div>
                <div className="team_card">
                    <img src="images/about/team/2.png" alt="team"/>
                    <h4>Simon Adams</h4>
                    <p>CTO</p>
                </div>
                <div className="team_card">
                    <img src="images/about/team/3.png" alt="team"/>
                    <h4>Paul Jones</h4>
                    <p>Design Lead</p>
                </div>
                <div className="team_card">
                    <img src="images/about/team/4.png" alt="team"/>
                    <h4>Sara Hardin</h4>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meet