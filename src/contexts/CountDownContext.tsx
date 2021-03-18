import { time } from "console";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext} from './ChallengeContext'
interface CountDownData {
count:number,
minute:number,
second:number,
hasFinished:boolean,
isActive:boolean,
resetCount:()=>void,
startcount:()=>void
}
interface CountDownProviderType {
    children:ReactNode
}

export const CountDownContext = createContext({} as CountDownData)
let countdownTimeout
export default function CountDownProvider({children}:CountDownProviderType){
    const {startNewChallenge} = useContext(ChallengesContext)
   

    const [count, setTime] = useState(25*60);
    const [isActive, setActive]=useState(false);
    const [hasFinished, setHasFinished ] = useState(false)
    const minute = Math.floor(count/60)
   
    const total= 25*60
    const second=count %60
// 100 - (progress * 100 / progress) 
    function startcount(){
        setActive(true)
    }
    
    function resetCount(){
        clearTimeout(countdownTimeout)
        setHasFinished(false)
        setActive(false);
        setTime(0.1*60)
    }
    useEffect(()=>{
        if(isActive&&count>0){
            countdownTimeout= setTimeout(()=>{
              setTime(count-1)  
            }
            , 1000)
        }else if(isActive && count==0){
            setHasFinished(true)
            setActive(false )
            startNewChallenge()
        }
    },[isActive, count])
    
    return(
        <CountDownContext.Provider value={{
        minute,
        count,
        second,
        hasFinished,
        isActive,
        resetCount,
        startcount }}>
            {children}
        </CountDownContext.Provider>
    )
}