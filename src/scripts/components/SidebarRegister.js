import React from 'react';
import styles from './Sidebar.scss';
import {Link} from 'react-router-dom';


class SidebarRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            name: '',
            surname: '',
        }
    }
    handleChange= (event) =>{
        event.preventDefault();

    };

    render() {
        return (
            <React.Fragment>
                <aside className={styles.sidebar}>
                    <section className={styles.sidebarWrapper}>
                        <ul className={styles.col}>
                            <li className={styles.colItem}>
                                <h2 className={styles.title}>Register</h2>
                            </li>
                            <li className={styles.colItem}>
                                <span className="simple-txt">or </span>
                                <Link to={'/login'} className="simple-link">Log in</Link>
                            </li>
                        </ul>
                        <label className="form-block">
                            <input
                                type="email"
                                className={
                                    [this.state.email.length > 0 ? "active" : "", "form-input"].join(' ')
                                }
                                onChange={
                                    (e) =>{
                                        this.setState({email: e.target.value});
                                    }
                                }
                                value={this.state.email}
                            />
                            <span className="form-placeholder">
                                Email
                            </span>
                        </label>
                        <label className="form-block">
                            <input
                                type="password"
                                className={
                                    [this.state.password.length > 0 ? "active" : "", "form-input"].join(' ')
                                }
                                onChange={
                                    (e) =>{
                                        this.setState({password: e.target.value});
                                    }
                                }
                                value={this.state.password}
                            />
                            <span className="form-placeholder">
                                Password
                            </span>
                        </label>
                        <label className="form-block">
                            <input
                                type="password"
                                className={
                                    [this.state.passwordConfirm.length > 0 ? "active" : "", "form-input"].join(' ')
                                }
                                onChange={
                                    (e) =>{
                                        this.setState({passwordConfirm: e.target.value});
                                    }
                                }
                                value={this.state.passwordConfirm}
                            />
                            <span className="form-placeholder">
                                Password confirm
                            </span>
                        </label>
                        <label className="form-block">
                            <input
                                type="text"
                                className={
                                    [this.state.name.length > 0 ? "active" : "", "form-input"].join(' ')
                                }
                                onChange={
                                    (e) =>{
                                        this.setState({name: e.target.value});
                                    }
                                }
                                value={this.state.name}
                            />
                            <span className="form-placeholder">
                                Name
                            </span>
                        </label>
                        <label className="form-block">
                            <input
                                type="text"
                                className={
                                    [this.state.surname.length > 0 ? "active" : "", "form-input"].join(' ')
                                }
                                onChange={
                                    (e) =>{
                                        this.setState({surname: e.target.value});
                                    }
                                }
                                value={this.state.surname}
                            />
                            <span className="form-placeholder">
                                Surname
                            </span>
                        </label>
                    </section>
                    <footer className={styles.sidebarFooter}>
                        <button className="btn btn--submit">Register</button>
                    </footer>
                </aside>
            </React.Fragment>
        )
    }
}

export default SidebarRegister;