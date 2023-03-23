import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Rating from '../../shared/components/Rating';
import { UserDataContext } from '../../shared/data';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [passwordType, setPasswordType] = useState('password');
    
    const { setUsernameGlobal } = useContext(UserDataContext)

    const navigate = useNavigate()

    function loginClick(e) {
        if(username == "Sagar" && password == "123"){
            setUsernameGlobal("Sagar")
            navigate('/home')
        }else{
            setUsernameGlobal("")
        }
    }

    function clearUsername(){
        if(passwordType == 'password'){
            setPasswordType('text')
        }else{
            setPasswordType('password')
        }
    }

    function apply(){
        setValue2(value)
    }

    return (
        <div>
            <div className='login-form'>
                {/* <input value={value} onChange={e=>setValue(e.target.value)}></input>
                <button onClick={apply}>Apply</button>
                <Rating value={value2}/> */}
                <button onClick={clearUsername}>Show/Hide Password</button>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type={'text'}></input>
                <input value={password} onChange={e => setPassword(e.target.value)} type={passwordType}></input>
                <button onClick={loginClick} type='button'>Login</button>
            </div>
        </div>
    )
}

