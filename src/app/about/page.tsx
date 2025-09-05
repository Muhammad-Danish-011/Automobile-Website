'use client'
import styles from '@/styles/About.module.css'
import ReactPlayer from 'react-player'
import MemberCard from './MemberCard'
import AboutTeam from './AboutTeam'
import HeroSection from '@/components/HeroSection'
import Heading from '@/components/Heading'
import {style} from '../career/cardStyle';


const title = 'About Us'
const content =
  'Discover the passionate individuals behind DGL - a team dedicated to fostering innovation, creativity and technical excellence in our community. Get to know our leadership and the diverse talents that drive our mission forward.'
export default function About() {
  return (
    <>
      <div>
              <style jsx>{style}</style>
        <HeroSection title={title} content={content} />
        {/* <div className={styles.intro}>
          <div className={styles.player}>
            
            <ReactPlayer
            // @ts-ignore
              url="https://youtu.be/FCpxpfrwaQs?si=xkxNl9p7Gql7hnuw"
              width="100%"
              height="100%"
              controls
            />

          </div>
          <div className={styles.intro_text}>
            Watch Our Intro Video<br></br>
            <button className={styles.youtube_btn}>
              Watch on &nbsp;
              <img alt="youtube" src="/images/social/youtube.png" />
            </button>
          </div>
        </div> */}
      </div>

      <div className={styles.fifth_section}>
        <Heading headingText="Our Team" />
        <div className={styles.helm}>
              <MemberCard
            imageSrc="/images/about/team/"
            memberName="Amir"
            memberDesignation="Business Unit Head Zimbabwe"
            memberInstagram=""
            memberLinkedIn=""
          />
          <MemberCard
            imageSrc="/images/about/team/danish.jpeg"
            memberName="Muhammad Danish"
            memberDesignation="Senior Manager software development"
            memberInstagram="https://www.instagram.com/i.muhammad_danish/"
            memberLinkedIn="https://www.linkedin.com/in/muhammad-danish-b40714224/"
          />
          <MemberCard
            imageSrc="/images/about/team/linta.jpg"
            memberName="Linta Muddassir"
            memberDesignation="Senior HR"
            memberInstagram="https://www.instagram.com/linta_.muddassir?igsh=MWgyeWNiYjhjd3M4aQ=="
            memberLinkedIn="https://www.linkedin.com/in/linta-muddassir-813221321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
      
        </div>
        <div className={styles.helm2}>
          <MemberCard
            imageSrc="/images/about/team/."
            memberName=""
            memberDesignation="Design Head"
            memberInstagram={''}
            memberLinkedIn={''}
          />
          <MemberCard
            imageSrc="/images/about/team/"
            memberName=""
            memberDesignation="Web Team Head"
            memberInstagram=""
            memberLinkedIn=""
          />
          <MemberCard
            imageSrc="/images/about/team/"
            memberName=""
            memberDesignation="Social Content Head"
            memberInstagram=""
            memberLinkedIn=""
          />
        </div>
        <div className={styles.third_section}>
          <AboutTeam
            aboutText="The DGL Team started as a small group of passionate individuals and has grown into a dynamic force driving innovation and learning. 
Our team brings together creative minds, technical experts, and dedicated leaders who collaborate to create impactful solutions for our community. 

With expertise in automobile trading and export, we specialize in delivering high-quality used cars, supplying genuine auto parts, 
and providing reliable global shipping solutions. From vehicle inspection and secure transactions to customer support and digital platforms, 
our team ensures a smooth and transparent experience for every client. 

Through workshops, events, and innovative initiatives, we continue to expand our services while fostering growth, knowledge, 
and long-term partnerships across the globe.
"
            heading="Team DGL "
            img="/images/about/teamRC1.png"
            img2="/images/about/teamRC2.png"
          />
        </div>
      </div>
    </>
  )
}
