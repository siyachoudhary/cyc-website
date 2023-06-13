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

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="MADHAVI Ramakrishnan" imgUrl="madhavi.webp" email="madhavi@codeyourchances.com" description="
            Madhavi graduated from the University of Illinois in Urbana-Champaign with a degree in Accounting and is a CPA. Madhavi currently works in Chicago as a Portfolio Analyst at Antares Capital. She has been involved with various nonprofits and volunteer work, such as after school mentorship, teaching basic financial literacy, and fundraising for children’s hospitals. She is a classically trained dancer in Bharatanatyam, an Indian dance form, and is passionate about South Indian culture and history."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="molly liu" imgUrl="molly.webp" email="" description="
            Molly is a master’s student in Data Science at Harvard University and earned a BA in Statistics and German from Northwestern University. Fascinated by the intersection of innovation and data, she co-founded a fintech startup, backed by Village Global, building income stabilization services for rideshare workers. She has worked on data science projects with companies spanning various industries: visual intelligence products at an early-stage mobility startup in Berlin, alarm prediction for Schneider Electric, and pest management for Wadhwani AI. She was awarded the DAAD fellowship in 2020 to conduct research on the optimization of solar energy distribution. Molly will be joining Temasek as an investment associate next summer, covering the technology and consumer sector and working closely with the investment data science team.            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Harry gao" imgUrl="harry.webp" email="" description="
            Harry is currently studying Computer Science and Neuroscience at Washington University in St. Louis. There, he works towards his goal of becoming a computer science researcher, using computer science to bring about positive change.

            So far, he's worked as a teaching assistant and a Student Technology Coordinator, where he's gained skills in working and communicating with others, as well as technical skills in programming and working with technology. Currently, he is working as a student researcher, implementing a project and writing a paper on a method of using machine learning that can advance the field of medical imaging.            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Alberta Yoo" imgUrl="alberta.webp" email="" description="
            Alberta is currently pursuing a Computer Science degree at McCormick school of Engineering at Northwestern University. She has taken great interest in positively reflecting the pervasiveness of technology. Alberta participated at Serif Project, which created a class scheduler used by over 7,000 Northwestern students, and joined a research sponsored by NSF developing mobile devices to help children with disabilities. This summer, she mentored students from different states to compose music by using the Python programming language, a project called, 'TunePad.' She has also taught NU students a computer programming language class as a peer-mentor (TA).

            Alebrta has played violin at Northwestern Philharmonia and other youth orchestras. She likes to play mobile games and loves hot cheetos. Alberta also works as an Executive Producer & DJ at K-Sound Radio show at WNUR 89.3 FM, and gets passionately involved with environment & youth economic empowerment campaigns.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Chetan Popli" imgUrl="chetan.webp" email="" description="
            Chetan is currently pursuing a Bachelor’s degree in electronics and telecommunications, with honours in artificial intelligence and machine learning certified by IBM) at Mukesh Patel School of Technology Management and Engineering at NMIMS University, Mumbai. He has been a proactive member of various college committees and an integral part of the organizing committees for national events like Social Conclave 2019 and the first edition of India Automation Games 2020. Apart from his interest in coding, Chetan has worked as a DJ across a number of clubs in Mumbai and he thoroughly enjoys exploring underrated genres like techno, dubstep and lo-fi.            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Ashvika Venkatesan" imgUrl="ashvika.webp" email="" description="
            An aspiring software developer, Ashvika is currently pursuing a bachelor’s degree in Computer Science and Engineering at Saveetha School of Engineering, Chennai. Always eager to meet new people and explore any opportunities that come her way, she lives by the phrase ‘There is no failure except in no longer trying’. She believes learning is a continuous process and is always open to learning. She loves working on aptitude problems, going on treks, writing and dogs. Latest addition to her learning mission: Learning French!
            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Afreen Akthar" imgUrl="afreen.webp" email="" description="
            Afreen is a web application developer with a bachelor's degree in Computer Science from Madras University in Chennai. As a coding instructor, Afreen is passionate about building a strong community for women in tech. She loves programming, designing, travelling and is fascinated by technological trends. As a National Scouter in India, she has been involved with several nonprofits and works to spread awareness for sustainable development. When not behind the computer, Afreen also enjoys trekking, camping and rappelling. She believes that tech is the way to go and every girl should have a chance at it!
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Braden Kobeski" imgUrl="braden.webp" email="" description="
            Besides a good whiff of a Yankee Candle, there's nothing Braden enjoys more than learning new skills! After graduating with a degree in Strategic Communications from the University of Missouri, Braden continues to use his free time to take online courses to enhance his knowledge of Motion Graphics, Data Analysis, Social Media Strategy, Online Marketing, and surely many more topics to come.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Parmis Mokhari-Dizaji" imgUrl="parmis.webp" email="" description="
            Parmis is a student at Phillips Exeter Academy. She is passionate about innovative design and advocacy as means to empower and help vulnerable individuals. This passion has driven her to be actively involved in Model UN and Debate, and spending her free time being a Maker. She has also been involved with various volunteer work and fundraising efforts, most of which have been focused on education and creativity.            "></MemberCard></div>
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