import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from '../components/Auth';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Stock from '../screens/Stock';
import Looms from '../screens/Stock/Looms';
import LoomsStatusButtons from '../screens/Stock/Looms/components/LoomsStatusButtons';
import LoomsTableFilter from '../screens/Stock/Looms/components/LoomsTable';
import FeedStock from '../screens/Stock/AddStock';
import Dobby from '../screens/Stock/Dobby';
import DobbyTableFilter from '../screens/Stock/Dobby/components/DobbyTable';
import FeedBill from '../screens/Billing/AddBill';


toast.configure();
export const Layout = (props) =>{
    return (
        <>
        <Header/>
          {props.children}
        <Footer/>
        </>
    )
}
const Routes = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path='/' component={() => (<Redirect to='/login' />)} />
                    <Route exact path='/login'> <Auth cmp={Login} /></Route>
                    <Route exact path='/dashboard'> <Auth cmp={Dashboard} /> </Route>
                    <Route exact path='/stock' >  <Auth cmp={Stock} /> </Route>
                    <Route exact path='/stock/looms' >  <Auth cmp={Looms} /> </Route>
                    <Route exact path='/stock/looms/htv' >  <Auth cmp={LoomsStatusButtons} /> </Route>
                    <Route exact path='/stock/looms/gtn' >  <Auth cmp={LoomsStatusButtons} /> </Route>
                    <Route exact path='/stock/looms/edo' >  <Auth cmp={LoomsStatusButtons} /> </Route>
                    <Route exact path='/stock/looms/semiEdo' >  <Auth cmp={LoomsStatusButtons} /> </Route>
                    <Route exact path='/stock/dobby' >  <Auth cmp={Dobby} /> </Route>
                    <Route exact path='/stock/dobby/1232' >  <Auth cmp={DobbyTableFilter} /> </Route>
                    <Route exact path='/stock/dobby/2232' >  <Auth cmp={DobbyTableFilter} /> </Route>
                    <Route exact path='/stock/dobby/2667' >  <Auth cmp={DobbyTableFilter} /> </Route>
                    <Route exact path='/stock/addStock' >  <Auth cmp={FeedStock} /> </Route>
                    
                    <Route exact path={`/stock/looms/htv/running`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/letoff`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/takeup`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/gearbox`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/undermotion`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/wallAndBody`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/elecard`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/belts`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/htv/tucking`} >  <Auth cmp={LoomsTableFilter} /> </Route>

                    <Route exact path={`/stock/looms/gtn/running`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/letoff`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/takeup`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/gearbox`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/undermotion`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/wallAndBody`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/elecard`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/belts`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/gtn/tucking`} >  <Auth cmp={LoomsTableFilter} /> </Route>

                    <Route exact path={`/stock/looms/edo/running`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/letoff`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/takeup`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/gearbox`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/undermotion`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/wallAndBody`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/elecard`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/belts`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/edo/tucking`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                        
                    <Route exact path={`/stock/looms/semiEdo/running`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/letoff`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/takeup`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/gearbox`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/undermotion`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/wallAndBody`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/elecard`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/belts`} >  <Auth cmp={LoomsTableFilter} /> </Route>
                    <Route exact path={`/stock/looms/semiEdo/tucking`} >  <Auth cmp={LoomsTableFilter} /> </Route>


                    <Route exact path={`/billing/addBill`} >  <Auth cmp={FeedBill} /> </Route>
                </Switch>
        </Router>
    )

}

export default Routes;
