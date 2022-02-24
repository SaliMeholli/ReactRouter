import React from 'react'
import './About.css'
import desktop from './images/desktop.jpg'
function About() {
  return (
    <div className='about'>
        <h1>About us</h1>
        <p>Who are we?</p>
        <div className="about-container">
          <img src={desktop} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptate sit placeat incidunt? Eveniet eius libero omnis cum hic voluptates eum quas soluta odio vero nostrum perferendis aliquid porro animi reprehenderit ipsam blanditiis, culpa impedit? Quidem ea facere optio corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum officiis pariatur, consequatur eos laboriosam architecto natus expedita tempora consequuntur.</p>
        </div>
    </div>
  )
}

export default About