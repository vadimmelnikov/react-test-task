import React from 'react';
import styles from './Sidebar.scss';
import {Link} from 'react-router-dom';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SidebarRegister from "./SidebarRegister";


class RegisterPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <SidebarRegister />
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default RegisterPage;