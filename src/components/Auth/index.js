import React from 'react';
import { Redirect } from 'react-router';

const Auth = (props) => {
    const isLoggedIn = localStorage.getItem('token');
    return (
        <>
            {!isLoggedIn ? 
                 (props.cmp.name === 'Login' ? <props.cmp />:<Redirect to='/' />) 
                :(props.cmp.name === 'Login' ? <Redirect to='/dashboard' />: <props.cmp />)
            }
        </>
    )
}
export default Auth;
