import React, { useState } from 'react'
import './entrystyle.css'
import { LoginForm } from '../component/login/Logincompo'
import { Rest } from '../component/pass/ResetPass'



export const Entrypage = () => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [formload, SetFormload] = useState('login')


    const handleOnchange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                SetEmail(value);
                break;

            case 'password':
                SetPassword(value);
                break;

            default:
                break;
        }

    }

    const formswitcher = (frmtype) => {
        SetFormload(frmtype);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log(email, password);
    };

    const handleResetSubmit = (e) =>
        {
            e.preventDefault();
            console.log(email);
        }
    return (

        <div className='entrypage bg-info'>
            <div className='form-box'>
                {formload === 'login' && <LoginForm formswitcher={formswitcher} handleOnchange={handleOnchange} handleSubmit={handleSubmit} email={email} password={password}></LoginForm>}
                {formload === 'reset' && <Rest formswitcher={formswitcher} handleOnchange={handleOnchange} handleResetSubmit={handleResetSubmit} email={email}></Rest>}

            </div>
        </div>
    )
}
