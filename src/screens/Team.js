import React from 'react'
import "./AllPages.css"
import "./Team.css"
import MemberCard from "../components/MemberCard.js"

export const Team = () => {

  return (
    <div>
        <div className='mainTeam'>

            <h1 className='headingAbout'>MEET THE TEAM</h1>
            
        </div>
        <div className='CYCMainBoard'>
          <div className='row'>
            <div className='column'><MemberCard memberName="DOMINIQUE ROBERTS" imgUrl="Dominique.webp"></MemberCard></div>
            <div className='column'><MemberCard memberName="GABRIELLA ROBERTS" imgUrl="Ella.webp"></MemberCard></div>
            <div className='column'><MemberCard memberName="PETER ZHONG" imgUrl="Peter.webp"></MemberCard></div>
          </div>

        </div>

        <div className='mainTeam2' id='youthBoard'>

            <h1 className='headingAbout'>MEET THE YOUTH LEADERSHIP BOARD</h1>
            
        </div>
        <div className='CYCYouthBoard'>

        </div>
    </div>

  )
}