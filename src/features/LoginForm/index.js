import React, { useState } from 'react';
import { useHistory  } from 'react-router';
// import { useDispatch  } from 'react-redux';
import Form from '../../components/Form';
import LabelledInput, 
{ LabelledInputTypeText, LabelledInputTypePassword, 
LabelledInputTypeReset, LabelledInputTypeSubmit } from '../../components/LabelledInput';
import Notify from '../../components/Notify';
// import { authenticateUser } from '../../redux/actions/AuthActions';
import authenticationManagementAPIs from '../../services/authentication.service';

const LoginForm = () => {
    // const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        
        const responseData = await authenticationManagementAPIs.login(username, password);
        console.log(responseData.data);
        if (responseData.data.msg){
            localStorage.setItem('token', responseData.data.msg);
            localStorage.setItem('username', responseData.data.uInfo[1]);
            Notify.success('Login Successfull..','top-center');
            history.push('/dashboard');
        }
        else{
            Notify.error('Invalid Username or Password!..', 'top-right');
        }
    
        // dispatch(authenticateUser(uname, pass));
    }
    
    return (
        <div className="loginFormContainer">
            <Form id="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <div className='formInputContainer'>
                    <LabelledInput id='userName'
                        type={LabelledInputTypeText} label='User name :'
                        breakColumn={true}
                        placeholder='Enter User name'
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className='formInputContainer'>
                    <LabelledInput id='password'
                        type={LabelledInputTypePassword} label='Password :'
                        breakColumn={true} 
                        placeholder='Enter Password' 
                        onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='formButtonContainer'>
                    <LabelledInput id='reset'
                        type={LabelledInputTypeReset} label=''
                        value='Reset'
                        breakColumn={false}
                        placeholder='' />
                    <LabelledInput id='submit'
                        type={LabelledInputTypeSubmit} label=''
                        value='Login'
                        breakColumn={false}
                        placeholder='' />
                </div>

            </Form>
        </div>
    )
}
export default LoginForm;
