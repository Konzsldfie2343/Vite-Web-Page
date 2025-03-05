import styles from './HomeBtn.module.css'
import { JSX } from 'react'
import { motion } from 'motion/react'
import { Link } from "react-scroll"

const HomeBtn = (): JSX.Element => {
    return (
        <motion.div className={styles.HomeBtn}>
            <div className={styles.Hexagon} style={{ backgroundColor: 'white', transform: "scale(0.9)" }}>
                <div className={styles.Hexagon} style={{ backgroundColor: 'gray', transform: "scale(0.9)" }}>
                    <Link
                        to="MainVisual"
                        smooth={true}
                        duration={1000}
                    >
                        <span className={styles.label}>TOP</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default HomeBtn