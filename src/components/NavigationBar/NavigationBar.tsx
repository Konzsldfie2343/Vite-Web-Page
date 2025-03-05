import { JSX } from 'react'
import styles from './NavigationBar.module.css'
import { motion } from 'motion/react'
import { Link } from "react-scroll"

const NavigationBar = ({ contents }: { contents: { title: string, url: string }[] }): JSX.Element => {
    return (
        <motion.div
            className={styles.NavigationBar}
        >
            {contents.map((content, index) => (
                <Link
                    to={`BasicContent${index + 1}`}
                    smooth={true}
                    duration={1000}
                    offset={-250}
                    className={styles.title}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
                        key={index}
                        className={styles.content}
                    >
                        {content.title}
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    )
}

export default NavigationBar