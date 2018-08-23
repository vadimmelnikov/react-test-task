import React from 'react';
import styles from './Sidebar.scss';
import {Link} from 'react-router-dom';


class SidebarLogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
            typeInput: 'password',
            valuePassword: '',
            valueEmail: '',
        }
    }

    handleEmailChange = (e) => {
        this.setState({valueEmail: e.target.value});
    };
    handlePasswordChange = (e) => {
        this.setState({valuePassword: e.target.value});
    };

    changeState = () => {
        let oldState = this.state.typeInput;
        let isTextOrHide = (oldState === 'password');
        let newState = (isTextOrHide) ? 'text' : 'password';
        let isPic = (isTextOrHide) ? false : true;
        this.setState({
            typeInput: newState,
            isHidden: isPic
        })
    };

    render() {
        let ShowIcon = () => {
            if (this.state.isHidden) {
                this.state.typeInput = 'password';
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15">
                        <g fill="#626A82" fillRule="nonzero">
                            <path
                                d="M24.573 6.372c-.27-.322-.555-.621-.828-.895-1.587-1.584-3.29-2.908-5.173-3.895C17.223.876 15.9.411 14.62.18 13.849.039 13.14 0 12.516 0c-.651 0-1.374.035-2.145.179C9.078.42 7.753.887 6.42 1.582c-1.83.956-3.546 2.269-5.173 3.895-.314.314-.586.603-.828.895-.559.672-.558 1.556 0 2.229.664.8 1.55 1.634 2.661 2.532 2.365 1.909 4.682 3.121 6.952 3.62.799.174 1.629.247 2.484.247.828 0 1.645-.073 2.444-.247 2.296-.502 4.619-1.705 6.979-3.62 1.183-.96 2.046-1.817 2.634-2.532.566-.69.573-1.546 0-2.23zm-.628 1.247c-.626.81-1.49 1.647-2.558 2.546-2.241 1.887-4.444 3.113-6.634 3.595-.807.176-1.548.24-2.23.24-.74 0-1.466-.067-2.245-.24-2.162-.485-4.384-1.681-6.663-3.595-1.074-.902-1.918-1.752-2.529-2.546-.099-.075-.099-.164 0-.27.071-.104.196-.258.37-.449.18-.198.312-.344.383-.434C3.487 4.76 5.171 3.471 6.87 2.573c1.356-.719 2.586-1.194 3.693-1.393a10.664 10.664 0 0 1 3.907 0c1.123.206 2.355.68 3.694 1.393 1.73.92 3.395 2.2 5 3.893.37.39.63.685.782.884.076.1.07.194 0 .27z"/>
                            <path
                                d="M12.52 3c-1.243 0-2.318.436-3.201 1.32C8.435 5.206 8 6.27 8 7.514s.432 2.298 1.319 3.18c.88.875 1.958 1.307 3.2 1.307 1.242 0 2.292-.436 3.162-1.308C16.565 9.808 17 8.756 17 7.512c0-1.243-.439-2.304-1.319-3.191C14.807 3.439 13.761 3 12.52 3zm2.461 6.981A3.34 3.34 0 0 1 12.521 11c-.974 0-1.804-.35-2.488-1.033C9.35 9.283 9 8.453 9 7.507c0-.975.35-1.79 1.033-2.474A3.395 3.395 0 0 1 12.522 4c.975 0 1.786.353 2.46 1.033.68.688 1.018 1.5 1.018 2.474 0 .96-.335 1.79-1.019 2.474z"/>
                        </g>
                    </svg>
                );
            } else {
                this.state.typeInput = 'text';
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15">
                        <g fill="none" fillRule="evenodd">
                            <path fill="#626A82" fillRule="nonzero"
                                  d="M24.573 6.372c-.27-.322-.555-.621-.828-.895-1.587-1.584-3.29-2.908-5.173-3.895C17.223.876 15.9.411 14.62.18 13.849.039 13.14 0 12.516 0c-.651 0-1.374.035-2.145.179C9.078.42 7.753.887 6.42 1.582c-1.83.956-3.546 2.269-5.173 3.895-.314.314-.586.603-.828.895-.559.672-.558 1.556 0 2.229.664.8 1.55 1.634 2.661 2.532 2.365 1.909 4.682 3.121 6.952 3.62.799.174 1.629.247 2.484.247.828 0 1.645-.073 2.444-.247 2.296-.502 4.619-1.705 6.979-3.62 1.183-.96 2.046-1.817 2.634-2.532.566-.69.573-1.546 0-2.23zm-.628 1.247c-.626.81-1.49 1.647-2.558 2.546-2.241 1.887-4.444 3.113-6.634 3.595-.807.176-1.548.24-2.23.24-.74 0-1.466-.067-2.245-.24-2.162-.485-4.384-1.681-6.663-3.595-1.074-.902-1.918-1.752-2.529-2.546-.099-.075-.099-.164 0-.27.071-.104.196-.258.37-.449.18-.198.312-.344.383-.434C3.487 4.76 5.171 3.471 6.87 2.573c1.356-.719 2.586-1.194 3.693-1.393a10.664 10.664 0 0 1 3.907 0c1.123.206 2.355.68 3.694 1.393 1.73.92 3.395 2.2 5 3.893.37.39.63.685.782.884.076.1.07.194 0 .27z"/>
                            <path fill="#636B84"
                                  d="M12.584 6.758l2.793-2.793.778.778-2.793 2.793 2.793 2.793-.778.778-2.793-2.794-2.793 2.794-.778-.778 2.794-2.793-2.794-2.793.778-.778 2.793 2.793z"/>
                        </g>
                    </svg>
                );
            }
        };
        return (
            <React.Fragment>
                <aside className={styles.sidebar}>
                    <section className={styles.sidebarWrapper}>
                        <ul className={styles.col}>
                            <li className={styles.colItem}>
                                <h2 className={styles.title}>Log in</h2>
                            </li>
                            <li className={styles.colItem}>
                                <span className="simple-txt">or </span>
                                <Link to={'/register'} className="simple-link">Register</Link>
                            </li>
                        </ul>
                        <label className="form-block">
                            <input
                                type="email"
                                className={
                                    [this.state.valueEmail.length > 0 ? "active" : "", "form-input"].join(' ')}
                                onChange={this.handleEmailChange}
                                value={this.state.valueEmail}
                            />
                            <span className="form-placeholder">
                                Email
                            </span>
                        </label>
                        <label className="form-block">
                            <input
                                type={this.state.typeInput}
                                className={
                                    [this.state.valuePassword.length > 0 ? "active" : "", "form-input form-input--password"].join(' ')}
                                onChange={this.handlePasswordChange}
                                value={this.state.valuePassword}
                            />
                            <span className="form-placeholder">
                                Password
                            </span>
                            <span className="looking-this" onClick={this.changeState}>
                                <ShowIcon></ShowIcon>
                            </span>
                            <a href="#" className="fogot-link">Forgot password</a>
                        </label>
                    </section>
                    <footer className={styles.sidebarFooter}>
                        <button className="btn btn--submit">Log in</button>
                    </footer>
                </aside>
            </React.Fragment>
        )
    }
}

export default SidebarLogIn;