import React from 'react';
import styles from './Sidebar.scss';
import {Link} from 'react-router-dom';
import Header from "./Header";
import SidebarLogIn from "./SidebarLogIn";
import Content from "./Content";
import Footer from "./Footer";


class LogInPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <SidebarLogIn/>
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default LogInPage;