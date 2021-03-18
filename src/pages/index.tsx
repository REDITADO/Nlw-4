import Head from 'next/head'
import { ExperienceBar } from '../components/experienceBar'
import  { GetServerSideProps } from 'next'
import styles from '../styles/pages/Home.module.css'
import { Profile } from '../components/perfil';
import { CompleteChalenge } from '../components/completeChallenge';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/challengeBox';
import CountDownProvider from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';


interface HomeProps{
  level:number,
  currentExperience:number,
  challengesCompleted:number
}
export default function Home(props:HomeProps) {
 
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted ={props.challengesCompleted}
    >
  <div className={styles.container}>
    <Head>
      <title>MoveIt</title>
    </Head>
  
   <ExperienceBar />
   <CountDownProvider>
   <section>
     <div>
       <Profile />
       <CompleteChalenge/>
      <Countdown/>
     </div>
     <div>
       <ChallengeBox/>
     </div>
   </section>
   </CountDownProvider>
   
    </div>
    </ChallengesProvider>
  )
}
export const   getServerSideProps:GetServerSideProps = async (ctx)=>{
 const {level, currentExperience, challengesCompleted} = ctx.req.cookies
  return{
    props:{
      level: Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}