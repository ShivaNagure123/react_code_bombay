import { USER_AUTHENTICATE, USER_LOGOUT } from '../../constants';

export const authenticateUser = userCredentials => dispatch => {

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(userCredentials)
    // })
    // .then(res => res.json())
    // .then(loginData =>
    //     dispatch({
    //         type: USER_AUTHENTICATE,
    //         payload: loginData
    //     })
    // );

    console.log('Authenticating user...');
    dispatch({
        type: USER_AUTHENTICATE,
        payload: userCredentials
    })
    localStorage.setItem('token', true);
};

export const logOutUser = () => dispatch =>{
    console.log('logging Out user...');
    dispatch({
        type: USER_LOGOUT,
        payload: {}
    })
    localStorage.removeItem('token');
}


