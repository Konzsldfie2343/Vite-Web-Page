import styles from './Footer.module.css'
import { JSX } from 'react'

const Footer = (): JSX.Element => {
    return (
        <div className={styles.Footer}>
            <a className={styles.link} href="https://utils-tauri.booth.pm">
                Booth Utility Shop
            </a>
        </div>
    )
}

export default Footer