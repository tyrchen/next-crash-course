import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={styles.title}>
            <h1><span>WebDev</span> News</h1>
            <p className={styles.description}>Keep up to date with the latest web dev</p>
        </div>
    )
}

export default Header
