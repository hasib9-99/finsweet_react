import React from 'react'
import Navbar from '../componats/navbar/Navbar'
import Design from '../componats/Design/Design'
import { Goal } from '../componats/Goal/Goal'
import Follow from '../componats/Follow/Follow'
import MissionVision from '../componats/MissionVision/MissionVision'
import Footer from '../componats/footer/Footer'
import Working from '../componats/Working/Working' 
import Meet from '../componats/Meet/Meet'

const About = () => {
  return (
   <>
        <Navbar/>
        <Design/>
        <Goal/>
        <Follow/>
        <MissionVision/>
        <Working/>
        <Meet/>
        <Footer/>


   </>
  )
}

export default About