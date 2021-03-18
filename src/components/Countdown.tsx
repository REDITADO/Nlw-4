
import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountDownContext } from '../contexts/CountDownContext'


import styles from '../styles/components/Countdown.module.css'


export function Countdown(){
   const{minute,count,second,hasFinished,isActive,resetCount,startcount} = useContext(CountDownContext)

    const [Ml,Mr] = String(minute).padStart(2,'0').split('')
    const [sl,sr] = String(second).padStart(2,'0').split('')
   
   
    return(

        <div>
        <div className={styles.countdownContainer}>
        <div>
          <span>{Ml}</span>
          <span>{Mr}</span>    
        </div>  
        <span>:</span>
        <div>
            <span>{sl}</span>
            <span>{sr}</span>
        </div>
        </div>
        {hasFinished?(
            <button disabled  className={styles.startCount} >Ciclo finalizado
            <img src="" alt=""/>
            </button>
        ):(<> {isActive?(<button type='button' 
        className={`${styles.startCount} ${styles.countButtonActive}`} 

        onClick={resetCount}>
         <div style={{width:`${count/60*4}%`}}/>
         <span>Abandonar ciclo</span>
            
            </button>)
            :(<button type='button' className={styles.startCount} onClick={startcount}> Iniciar um ciclo</button>)}</>)}
       
        

      
        </div>
    )
}