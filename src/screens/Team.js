import React, { useEffect } from 'react'
import "./AllPages.css"
import "./Team.css"
import MemberCard from "../components/MemberCard.js"
import AOS from 'aos'
import "aos/dist/aos.css"

export const Team = () => {
  useEffect(()=>{
    AOS.init({duration: 100, easing:"ease-in-out"});
  }, []);

  return (
    <div>
        <div className='mainTeam'>

            <h1 className='headingAbout'>MEET THE TEAM</h1>
            
        </div>
        <div className='CYCMainBoard'>
          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="DOMINIQUE ROBERTS" imgUrl="Dominique.webp" email="dominique@codeyourchances.com" description="
            Dominique is a graduate of Harvard Law School, New York University Tisch School of the Arts and holds a masters in history from Oxford University where she completed her dissertation on the role of women in the creation of the film industry. Dominique is a lawyer admitted to practice in England, Wales and California, and previously worked in the Corporate and International Arbitration teams of Sidley Austin’s London and Hong Kong offices. She recently spent time at the National Committee on U.S. - China Relations in NYC as a Harvard East Asian Legal Studies visiting scholar.
            Dominique is also the co-founder of Paper Starship Studios. Her film work has been featured in Women’s Way magazine and screened at festivals around the world. Dominique is the creator of the historical podcast Wonder Women, which aims to address the gender imbalance in traditional historiography by telling the stories of inspirational and unknown women in history."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="GABRIELLE ROBERTS" imgUrl="Ella.webp" email="ella@codeyourchances.com" description="
            Gabrielle studied Film & Television Production and Computer Science at the University of Southern California. She also recently received a master's in Global Affairs from Tsinghua University as a Schwarzman Scholar where she conducted thesis research on the development of the Chinese visual effects industry and China-U.S. co-productions. She is one of very few women working in virtual production and is using her advanced technical and creative skillset to revolutionize the film industry. She studied machine learning through Oxford University and presented her published Machine Learning research project at MIT’s 2019 Institute of Electrical and Electronics Engineers (IEEE) conference. She has worked with Oscar-winning filmmakers, helped evolve work in virtual humans at the LA startup Brud, screened her films globally, and currently works for the Emmy and Academy award-winning international VFX company Pixomondo.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="PETER ZHONG" imgUrl="Peter.webp" email="peter@codeyourchances.com " description="
            Technology and Entrepreneurship have been Peter's long lasting passion. As an aspiring Computer Scientist from Australia, he is interested in leveraging his technology skill sets to impact the greater community positively, be it through imparting knowledge or creating meaningful products. In industry, he has worked on his own startups, providing him with experience in user-centred software design; in school, he worked as a TA responsible for supporting students who have no or virtually no experience in coding making their first foray to the world of programming; in academia, he worked as a research assistant focusing on how to use CS concepts to interpret data in an interdisciplinary context. Currently, he is pursuing a Bachelor of Science in Engineering (Computer Science & Industrial Engineering) at Northwestern University.
            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="ANDREW SPATAFORA" imgUrl="andrew.webp" email="andrew@codeyourchances.com" description="
            Andrew earned an MSc from Imperial College London where he completed his dissertation on the unrealized potential of AI and Virtual Personal Assistants in Marketing. While at Imperial, he won the Marketing Plan Competition by developing and pitching LEV: a luxury bracelet with design functions that both empower and protect women. Andrew specializes in the development of multi-channel marketing campaigns and recently worked as an external project consultant at Arla UK. In 2019, Andrew ran the Chicago Marathon and also served as a fundraiser and consultant for the Chicago Women's Health Center whose aim is to provide health care and services to women and trans individuals in Chicago. Andrew works at Facebook and hopes that CYC is the catalyst for many young girls' careers in technology and beyond."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="CHELSEA CELISTAN" imgUrl="chelsea.webp" email="chelsea@codeyourchances.com" description="
            Chelsea earned an MBA from Harvard Business School, where she was Co-President of Women in Investing as well as a Forté Fellow and Toigo Fellow, representing organizations that promote diversity in business. Passionate about improving educational and career outcomes for women, Chelsea was on the Board of both Smart Woman Securities and Circle of Women at Harvard College. In those capacities, she spearheaded and executed a project to fund an all-girls boarding school in Malawi and created programming to introduce undergraduate women to careers in finance. Chelsea is a private equity investor and graduated cum laude from Harvard College.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="NIMISHA SARA PHILIP" imgUrl="nimisha.webp" email="" description="
             Nimisha adorns various hats as an impact investment lawyer, international feature writer at the UN and Indulge (New Indian Express), Founder of a creative festival – The Spoken Wave and Audacious (a women empowerment venture), and plays a pivotal role on the advisory board of various NGOs with a special interest in gender lens investment, women and child rights. She is currently vice president, legal and strategy at an Impact Investment advisory firm and has previously worked in India’s leading law firm, Cyril and Shardul Amarchand Mangaldas. She holds a law degree from The London School of Economics and SOAS, University of London and a Literature degree from St. Stephens, Delhi University. She has been featured in various newspapers, magazines and online publications for her diverse ventures in law, literature, arts, leadership and social impact.
            "></MemberCard></div>
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