import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/levelModal.module.css'

export default function LevelUpModal(){
    const{level, closeModal}=useContext(ChallengesContext)
   
    return(
        <div className={styles.owerLay}>
        <div className={styles.container}>
            
            <header>{level}</header>
            <strong>Parabéns!</strong>
            <p>Você avançou de level</p>

            <button type='button' onClick={closeModal}>
                <img src="/icons/close.svg" alt=""/>
            </button>
           
        </div>
        </div>
    )
    
}

