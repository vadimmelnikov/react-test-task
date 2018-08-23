import React from 'react';
import styles from './Footer.scss';
import {Link} from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className={styles.footer}>
                    <div className="container">
                        <ul className={styles.flex}>
                            <li className={styles.flexItem}>
                                <a href="#" className={styles.link}>About exchange</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;