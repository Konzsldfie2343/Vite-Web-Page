import { JSX } from 'react'
import styles from './NavigationBar.module.css'
import { motion } from 'motion/react'

const NavigationBar = ({ contents }: { contents: { title: string, url: string }[] }): JSX.Element => {
    return (
        <motion.div
            className={styles.NavigationBar}
        >
            {contents.map((content, index) => (
                <div key={index} className={styles.content}>
                    <div>{content.title}</div>
                </div>
            ))}
        </motion.div>
    )
}

export default NavigationBar