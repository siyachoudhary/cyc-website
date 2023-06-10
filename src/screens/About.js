import React from 'react'
import "./AllPages.css"
import "./About.css"
import YoutubeEmbed from "../components/YoutubeEmbed.js";

export const About = () => {

  return (

    <div className=''>
      <div className='mainAbout'>
        <h2 className='headingAbout'>INSPIRING A NEW GENERATION OF LEADERS</h2>
      </div>
        <YoutubeEmbed embedId="PWjksZ0JkBM" />
        
    </div>

  )
}