import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="container footer_main">
        <div class="footer_left">
            <div class="logo">
                <img src="images/logo.png" alt="logo"/>
            </div>
            <p>We are always open to discuss your project and improve your online presence.</p>
            <div class="footer_bottom">
                <div class="footer_email">
                    <h4>Email me at</h4>
                    <p>contact@website.com</p>
                </div>
                <div class="footer_call">
                    <h4>Call us</h4>
                    <p>0927 6277 28525</p>
                </div>
            </div>
        </div>
        <div class="footer_right">
            <h2>Lets Talk!</h2>
            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <p></p>
            <ul>
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer