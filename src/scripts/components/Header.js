import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className={styles.header}>
                    <div className="container">
                        <ul className={styles.flex}>
                            <li className={styles.flexItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 35 30">
                                    <path fill="#2068FF" fillRule="evenodd" d="M27.707 1.595L31.075 0 34.5 1.595 26.595 29.25H16.54l-.384-13.324h-1.074L10.055 29.25H0l.86-15.377h6.485l-.476 6.7h1.075l4.375-11.232h8.52l.498 11.233h1.075z"/>
                                </svg>
                            </li>
                            <li className={styles.flexItem}>
                                <ul className={styles.menu}>
                                    <li className={styles.menuItem}>
                                        <a href="#" className={styles.menuLink}>Trading</a>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <a href="#" className={styles.menuLink}> Documentation</a>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <a href="#" className={styles.menuLink}>API</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.flexItem}>
                                <Link to={'/register'}>
                                    <button className="btn btn--header">
                                        Log in
                                    </button>
                                </Link>

                            </li>
                        </ul>

                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;