import { useContext } from 'react'
import { ChallengesContext, ChallengesProvider} from '../contexts/ChallengeContext'
import { CountDownContext } from '../contexts/CountDownContext'


import styles from '../styles/components/challengeBox.module.css'

const hasActiveChallenge = true

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, CompleteChallenge,} = useContext(ChallengesContext)
    const {resetCount} = useContext(CountDownContext)
    
    function HanddleChallengeSucceeded(){
        CompleteChallenge()
        resetCount()
        
    }
    function HanddleChallengeFail(){
        resetChallenge()
        resetCount()
    
    }
    
    return(
        <div className={styles.challengeBocContainer}>
        {activeChallenge ? 
        (<div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount}</header>
            <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
            </main>
            <footer>
                <button
                type="button"
                className={styles.buttonFail}
                onClick={HanddleChallengeFail}
                >falhei</button>

                <button
                type="button"
                className={styles.buttonSucceded}
                onClick={HanddleChallengeSucceeded}
                >Completei</button>
            </footer>
        </div>):
        ( <div className={styles.notActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>

            <p><img src="icons/level-up.svg" alt="icone"/>

            Avance de level completando desafios
            </p>
        </div>)}
       
        </div>
    )
}