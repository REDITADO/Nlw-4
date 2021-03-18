import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import{createContext, ReactNode, useContext, useEffect, useState} from 'react'
import LevelUpModal from '../components/levelUpModal'

interface ChallengesProviderType {
    children:ReactNode,
    level:number,
  currentExperience:number,
  challengesCompleted:number
}
interface challenge{
    type:'body'| 'eye',
    description:string,
    amount:number
}

interface Challegens{
    activeChallenge:challenge,
    level:number,
    currentExperience:number,
    challengesCompleted:number,
    experienceToNextLevel:number,
    startNewChallenge: ()=>void,
    resetChallenge:()=>void,
    CompleteChallenge: ()=>void,
    upLevel: ()=>void,
    closeModal:()=>void
}

export const ChallengesContext= createContext({} as Challegens)

export function ChallengesProvider({children, ...rest  }:ChallengesProviderType){
    const [level, setLevel] = useState(rest.level??0)
    const [currentExperience, setCurrent] = useState(rest.currentExperience??0)
    const [challengesCompleted, setChallenges] = useState(rest.challengesCompleted??0)
    const [modalOpen, setModalOpen] = useState(false)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level+2)*4,2)

    useEffect(()=>{
        Notification.requestPermission()
    
    }, [])   
    useEffect(()=>{
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    },[level, currentExperience, challengesCompleted])

    function upLevel(){
        setLevel(level+1)
        setModalOpen(true)
    }
    function closeModal(){
        setModalOpen(false)
    }
    function startNewChallenge(){
        const reandomChallenge = Math.floor(Math.random()*challenges.length)
        const challenge = challenges[reandomChallenge]

        setActiveChallenge(challenge)

        new Audio('/Notification.mp3').play()

      

        if(Notification.permission == 'granted'){
            new Notification('Novo desafio', {
                body:`valendo ${challenge.amount}xp!`,
                icon:'favicon.png' 
            })
        }
    }
    function resetChallenge(){
        setActiveChallenge(null)
    }
    function CompleteChallenge(){
        if(!activeChallenge) return;

        const{amount} = activeChallenge

        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience-experienceToNextLevel
            upLevel()
            setCurrent(finalExperience)
            setActiveChallenge(null)
            setChallenges(challengesCompleted+1)
        }
        else if(finalExperience< experienceToNextLevel){
            setChallenges(challengesCompleted+1)
            setCurrent(finalExperience)
            setActiveChallenge(null)
        }
    }
    return(
        <ChallengesContext.Provider value={{upLevel, closeModal, startNewChallenge,CompleteChallenge,  level,currentExperience,challengesCompleted, activeChallenge, resetChallenge, experienceToNextLevel}}>
            {children }
           
           {modalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}