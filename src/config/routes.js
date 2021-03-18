import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Stock from '../screens/Stock';


const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route exact path='/stock' component={Stock} />
                <Route path='/stock/looms' component={null} />
                <Route path='/stock/dobby' component={null} />
                <Route path='/stock/nutBolts' component={null} />
                <Route path='/stock/other' component={null} />
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Routes;
