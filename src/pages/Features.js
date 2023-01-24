import React from 'react'
import Navbar from '../componats/navbar/Navbar'
import Banner from '../componats/Features_banner/banner'
import Working from '../componats/Working/Working'
import Client from '../componats/Client/Client'
import Footer from '../componats/footer/Footer'

const Features = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Working/>
        <Client/>
        <Footer/>

    </>
  )
}

export default Features