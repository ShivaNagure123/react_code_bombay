import React, { useState } from 'react';
import { useHistory  } from 'react-router';
import { useDispatch  } from 'react-redux';
import Form from '../../components/Form';
import LabelledInput, 
{ LabelledInputTypeText, LabelledInputTypePassword, 
LabelledInputTypeReset, LabelledInputTypeSubmit } from '../../components/LabelledInput';
import { authenticateUser } from '../../redux/actions/AuthActions';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        const userCredentials ={
            username: uname,
            password:pass
        }
        alert('login success');
        
        dispatch(authenticateUser(userCredentials));
        history.push('/dashboard');
    }
    
    return (
        <div className="loginFormContainer">
            <Form id="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <div className='formInputContainer'>
                    <LabelledInput id='userName'
                        type={LabelledInputTypeText} label='User name :'
                        breakColumn={true}
                        placeholder='Enter User name'
                        onChange={e => setUname(e.target.value)} />
                </div>
                <div className='formInputContainer'>
                    <LabelledInput id='password'
                        type={LabelledInputTypePassword} label='Password :'
                        breakColumn={true} 
                        placeholder='Enter Password' 
                        onChange={e => setPass(e.target.value)}/>
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
