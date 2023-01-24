import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <section>
        <div class="container">
            <div class="contact_main">
                <div class="contact_hade">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <p>eiusmod tempor incididunt ut labore.</p>
                </div>
                <form>
                    <div class="form_main">
                        <div class="form_left">
                            <h4>name</h4>
                            <input type="text" placeholder="Enter Your Name"/>
                            <h4>Subject</h4>
                            <input type="text" placeholder="Provide context"/>
                        </div>
                        <div class="form_right">
                            <h4>Email</h4>
                            <input type="email" name="#" id="#" placeholder="Enter Your Email"/>
                            <h4>Subject</h4>
                            <input type="text" placeholder="Select Subject"/>
                        </div>
                    </div>
                    <h4>Message</h4>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Write your  question here"></textarea>
                    <button type="submit">Sand Message</button>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact