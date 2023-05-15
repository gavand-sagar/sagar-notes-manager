import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../shared/data';

export default function Signup() {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const [obj, setObj] = useState({});


    function signupClick() {
        if (role) {
            let formData = {
                username,
                password,
                email,
                role
            }

            fetch(process.env.REACT_APP_BACKEND_URL+'/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(x => x.json())
                .then(data => {
                    
                    alert("User Added")
                })

        } else {
            alert('pick a role')
        }

    }

    return (
        <div>
            <div className='login-form'>

                <select value={role} onChange={e => setRole(e.target.value)} >
                    <option value={''}>select user role</option>
                    <option >Admin</option>
                    <option >Guest</option>
                </select>

                <input value={username} onChange={e => setUsername(e.target.value)} name='username' placeholder='username' type={'text'}></input>
                {!username && <span>Username is Required</span>}
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type={'text'}></input>
                <input value={password} onChange={e => setPassword(e.target.value)} type={'password'}></input>
                <button onClick={signupClick} type='button'>Signup</button>
                <hr></hr>
                <div>Username :  {obj.username}</div>
                <div>email : {obj.email}</div>
                <div>password : {obj.password}</div>
                <div>Role : {obj.role}</div>
            </div>
        </div>
    )
}
