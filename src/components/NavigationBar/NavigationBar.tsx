import { JSX } from 'react'
import styles from './NavigationBar.module.css'
import { motion } from 'motion/react'

const NavigationBar = ({ contents }: { contents: { title: string, url: string }[] }): JSX.Element => {
    return (
        <motion.div
            className={styles.NavigationBar}
        >
            {contents.map((content, index) => (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
                    key={index}
                    className={styles.content}
                >
                    <div className={styles.title}>{content.title}</div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default NavigationBar