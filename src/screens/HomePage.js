import React from 'react'
import "./AllPages.css"
import "./HomePage.css"

export const HomePage = () => {

  return (

    <div className=''>
        <div id='mainHome'>
            <h1 className='headingMain'>CODE YOUR CHANCES</h1>
        </div>
        <h2 className='heading2'>AS SEEN ON</h2>

        <a href='https://www.cbsnews.com/chicago/video/code-your-chances-hosting-coding-workshop-today-in-lincoln-park/#x' target='blank'><img src= {process.env.PUBLIC_URL + "/images/CBS.png"} className='newsLogo small'></img></a>

        <div>
          <a href='https://vimeo.com/460777990' target='blank'><img src= {process.env.PUBLIC_URL + "/images/NBC.webp"} className='newsLogo big'></img></a>
          <a href='https://www.fox32chicago.com/video/964483' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Fox.webp"} className='newsLogo big'></img></a>
        </div>

        <div>
        <a href='https://community.today.com/parentingteam/post/sisters-stepping-up-to-help' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Parenting.webp"} className='newsLogo small'></img></a>
        <a href='https://www.chicagotribune.com/suburbs/hinsdale/ct-dhd-code-your-chances-tl-0716-20200713-n2xicbm5hfep3ffwttudo5hfj4-story.html' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Tribune.webp"} className='newsLogo small'></img></a>
        </div>

        <div>
        <a href='https://jwcdaily.com/hinsdalelivingmagazine/2020/03/01/the-future-is-female/' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Hinsdale.webp"} className='newsLogo small'></img></a>
        <a href='https://women-in-technology.com/' target='blank'><img src= {process.env.PUBLIC_URL + "/images/WomenInTech.webp"} className='newsLogo small'></img></a>
        </div>

        <div>
        <a href='https://www.eagletribune.com/phillips-student-hopes-to-inspire-girls-to-code/article_aefa5897-8c23-52fe-8d2b-f93374da0a5c.html' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Eagle.webp"} className='newsLogo small'></img></a>
        <a href='https://www.chicagotribune.com/suburbs/hinsdale/ct-dhd-coding-gender-gap-tl-0708-20210706-6lxkqifnp5fe3osmrlufuolxfa-story.html' target='blank'><img src= {process.env.PUBLIC_URL + "/images/Doings.webp"} className='newsLogo small'></img></a>
        </div>

        <a href='https://womenintechfestivalglobal.com/womenintechfestivalglobal2023/en/page/home' target='blank'><img src= {process.env.PUBLIC_URL + "/images/WomenTechGlobal.webp"} className='newsLogo small last'></img></a>

    </div>

  )
}