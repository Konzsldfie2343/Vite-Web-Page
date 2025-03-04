import { JSX } from 'react'
import styles from './BasicContent.module.css'
import FadeInText from '../../modules/FadeInText/FadeInText'

interface props {
    title: string,
    subTitle?: string
}

const BasicContent = ({title, subTitle}: props): JSX.Element => {
    return (
        <div className={styles.BasicContent}>
            <FadeInText text={title} />
            <br />
            {subTitle}
        </div>
    )
}

export default BasicContent