import React from 'react';
import Form from '../../components/Form';
import LabelledInput, 
{ LabelledInputTypeText, LabelledInputTypePassword, 
LabelledInputTypeReset, LabelledInputTypeSubmit } from '../../components/LabelledInput';

const LoginForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const loginFormData = new FormData(e.target);
        alert(loginFormData.get('userName'));
        alert(loginFormData.get('password'));
    }
    return (
        <div className="loginFormContainer">
            <Form id="loginForm" onSubmit={(e) => handleSubmit(e)}>
                <div className='formInputContainer'>
                    <LabelledInput id='userName'
                        type={LabelledInputTypeText} label='User name :'
                        breakColumn={true}
                        placeholder='Enter User name' />
                </div>
                <div className='formInputContainer'>
                    <LabelledInput id='password'
                        type={LabelledInputTypePassword} label='Password :'
                        breakColumn={true} 
                        placeholder='Enter Password' />
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
