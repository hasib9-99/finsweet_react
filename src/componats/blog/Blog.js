import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <section ClassName="our_blog">
            <div className="container">
                <h2 className="blogs_titel">Our blog</h2>
                <div className="blogs">
                    <div className="blog">
                        <img src="images/blogs/blog1.png" alt="blog_photo"/>
                        <p>19 Jan 2022</p>
                        <h4>How one Webflow user grew his single person consultancy from 10-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                        <a href="">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="blog">
                        <img src="images/blogs/blog2.png" alt="blog_photo"/>
                        <p>19 Jan 2022</p>
                        <h4>How one Webflow user grew his single person consultancy from 20-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                        <a href="">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="blog">
                        <img src="images/blogs/blog3.png" alt="blog_photo"/>
                        <p>19 Jan 2022</p>
                        <h4>How one Webflow user grew his single person consultancy from 30-100K in 14 months</h4>
                        <p>See how pivoting to Webflow changed one person's sales strategy and allowed him to attract</p>
                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Blog