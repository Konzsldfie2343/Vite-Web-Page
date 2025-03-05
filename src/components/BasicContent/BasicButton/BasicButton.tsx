import styles from './BasicButton.module.css'
import { JSX, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const variants = {
    hidden: { opacity: 0, scale: 0.5 },
}

const BasicButton = ({ url }: { url: string }): JSX.Element => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-40% 0px"
    })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 })
        }
    }, [inView, controls])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.BasicButton}
            onClick={() => window.open(url, '_blank')}
        >
            <div className={styles.Hexagon} style={{ backgroundColor: 'gray', transform: "scale(0.9)" }}>
                <motion.span
                    whileHover={{ textShadow: "0 0 0.5px white" }}
                    className={styles.label}
                >詳細</motion.span>
            </div>
        </motion.div>
    )
}

export default BasicButton