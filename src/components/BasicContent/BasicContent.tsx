import { JSX, useEffect } from 'react'
import styles from './BasicContent.module.css'
import FadeInText from '../../modules/FadeInText/FadeInText'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import BasicButton from './BasicButton/BasicButton'

interface props {
    title: string,
    subTitle: string
    url: string
    img: string
    id: string
}

const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
}

const BasicContent = ({ title, subTitle, url, img, id }: props): JSX.Element => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-40% 0px"
    })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 })
        }
    }, [inView, controls])

    return (
        <motion.div
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
            className={styles.BasicContent}
        >
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    <FadeInText text={title} />
                </div>
                <div className={styles.subTitle}>
                    <FadeInText text={subTitle} />
                </div>
                <BasicButton url={url} />
            </div>
            <motion.img
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5, type: "spring", damping: 50, stiffness: 100 }}
                src={img}
                alt="content img"
                className={styles.img}
            />
            <motion.div className={styles.stripe} />
        </motion.div>
    )
}

export default BasicContent