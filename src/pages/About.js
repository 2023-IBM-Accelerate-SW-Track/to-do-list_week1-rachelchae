import React, { Component } from 'react';
import "./About.css";
import profile_image from '../assets/profile_pic_name.png';

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_pic"
          // Image goes here
          alt="Profile Pic" src={profile_image} style ={{width: 380, height: 500}}
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Rachel Chae</div>
        <div className="brief_description">
          Hi, I'm a junior studying Computer Science @ Brown University!
        </div>
        <div className='fun_facts'>
          In my free time, you'll find me painting, drawing designs, or reading books outside!
          I'm a huge creativity gal, and I always emphasize the artistic and design aspect of coding! 
        </div>
      </div>
      
    </div>
  </div>

      </div>
    )
  }
}