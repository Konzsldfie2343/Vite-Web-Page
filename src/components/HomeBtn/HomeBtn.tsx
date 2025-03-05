import styles from './HomeBtn.module.css'
import { JSX } from 'react'
import { motion } from 'motion/react'
import { Link } from "react-scroll"

const HomeBtn = (): JSX.Element => {
    return (
        <Link to="MainVisual" smooth={true} duration={1000} className={styles.HomeBtnContainer}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className={styles.HomeBtn}
            >
                <div className={styles.Hexagon} style={{ backgroundColor: 'white', transform: "scale(0.9)" }}>
                    <div className={styles.Hexagon} style={{ backgroundColor: 'gray', transform: "scale(0.9)" }}>
                        <span className={styles.label}>TOP</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default HomeBtn