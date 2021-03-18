import { useCallback, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/completeChalenge.module.css'

export function CompleteChalenge(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return(
        <div className={styles.container}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}