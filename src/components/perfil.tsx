import { useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/profile.module.css'


export function Profile(){
    const {level} = useContext(ChallengesContext)
    return(
    <div className={styles.profileContainer}>
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
    <div>
        <strong>José Carlos</strong>
        <p>
            <img src="icons/level.svg" alt="nivel"/>
            Level {level}
            </p>
    </div>
    </div>
    )
}