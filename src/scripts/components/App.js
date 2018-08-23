import React from 'react';
import styles from './App.scss';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./SidebarLogIn";
import Content from "./Content";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                {/*<Sidebar/>*/}
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;
