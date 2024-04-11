import {Link} from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="https://github.com/Zelimkhan-Magomadov">
                <div className={styles.logo}>
                    Z
                </div>
            </a>
            <div className={styles.navigation}>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
        </header>
    );
};

export default Header;
