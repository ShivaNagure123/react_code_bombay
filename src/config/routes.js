import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../components/Auth';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Stock from '../screens/Stock';


const Routes = () => {
    // const userInfo = useSelector(state => state.auth);
    return (
        <Router>
            <Header />
                <Switch>
                    <Route exact path='/' component={() => (<Redirect to='/login' />)} />
                    <Route exact path='/login'> <Auth cmp={Login} /></Route>
                    <Route exact path='/dashboard'> <Auth cmp={Dashboard} /> </Route>
                    <Route exact path='/stock' >  <Auth cmp={Stock} /> </Route>
                </Switch>
            <Footer />
        </Router>
    )

}

export default Routes;
