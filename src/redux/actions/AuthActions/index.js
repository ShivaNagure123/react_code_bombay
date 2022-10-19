import { USER_AUTHENTICATE, USER_LOGOUT } from '../../constants';


export const authenticateUser = (username, password) => dispatch => {

    dispatch({
        type: USER_AUTHENTICATE,
        payload:'demo'
    })
   
    // localStorage.setItem('token', true);
    
};

export const logOutUser = () => dispatch =>{
    console.log('logging Out user...');
    dispatch({
        type: USER_LOGOUT,
        payload: {}
    })
    // localStorage.removeItem('token');
    localStorage.clear();
}


