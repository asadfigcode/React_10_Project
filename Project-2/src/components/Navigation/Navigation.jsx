import styles from './Navigate.module.css';

const Navigation = () => {
    return (
        <nav className={`container ${styles.navigation}`}>
            <div className="brnad_logo">
                <a href="#"><img src="/images/Frame 2 1.png" alt="Do Some Code" /></a>
            </div>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navigation