import { JSX, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeInText = ({text}: {text: string}): JSX.Element => {

    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-40% 0px"
    })

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 })
        }
    }, [inView, controls])

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.span ref={ref}>
            {text.split("").map((char: string, index: number) => (
                <motion.span
                    key={index}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default FadeInText