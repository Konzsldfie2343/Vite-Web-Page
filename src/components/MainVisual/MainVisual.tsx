import styles from './MainVisual.module.css'
import { JSX } from 'react'
import FadeInText from '../../modules/FadeInText/FadeInText'

const MainVisual = (): JSX.Element => {
    return (
        <div className={styles.MainVisual}>
            <FadeInText text="Main Visual Component" />
        </div>
    )
}

export default MainVisual