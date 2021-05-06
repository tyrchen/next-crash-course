import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = props => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {

}

export default Nav
