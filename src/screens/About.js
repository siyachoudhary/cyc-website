import React, { useEffect } from 'react'
import "./AllPages.css"
import "./About.css"
import YoutubeEmbed from "../components/YoutubeEmbed.js";
import AOS from "aos"
import "aos/dist/aos.css"

export const About = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  return (

    <div className=''>
      <div className='mainAbout'>
        <h2 className='headingAbout'>INSPIRING A NEW GENERATION OF LEADERS</h2>
      </div>
        <YoutubeEmbed embedId="PWjksZ0JkBM"/>
        <div className='aboutInfo'>
          <div className='basicInfoAbout' data-AOS="fade-right">
            <h3 className='whatIsCYC'>WHAT IS CYC?</h3>
            <p className='basicPara'>
            Code Your Chances (CYC) is a nonprofit organization that introduces young girls to the creative uses of computer science and how they can apply their unique creativity to tech. Our mission is to inspire a new generation of diverse leaders in computer science by focusing on how computer science is used in creative industries, such as film production, game development, AR, VR, and creative uses of AI. CYC works with communities that have limited access to tech education.</p>
          </div>
          <img data-AOS="fade-left" src={process.env.PUBLIC_URL + "/images/aboutImg.webp"} alt="image" className='aboutImg'></img>
        </div>
    </div>

  )
}