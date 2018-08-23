import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import NotFound from "./NotFound";
import LogInPage from "./LogInPage";
import RegisterPage from "./RegisterPage";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LogInPage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;