import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Tooltip } from '@mui/material'
import { UserDataContext } from '../../shared/data';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [passwordType, setPasswordType] = useState('password');

    const { setUsernameGlobal } = useContext(UserDataContext)

    const navigate = useNavigate()

    function loginClick(e) {
        if (username == "Sagar" && password == "123") {
            setUsernameGlobal("Sagar")
            navigate('/home')
        } else {
            setUsernameGlobal("")
        }
    }

    function clearUsername() {
        if (passwordType == 'password') {
            setPasswordType('text')
        } else {
            setPasswordType('password')
        }
    }

    function apply() {
        setValue2(value)
    }

    return (
        <div>
            <div className='login-form'>


                <Typography>Plese Login!!!</Typography>

                <TextField label={'Username'} value={username} onChange={(e) => setUsername(e.target.value)} type={'text'}></TextField>

                <div style={{ position: 'relative' }}>
                    <TextField label={'Password'} value={password} onChange={e => setPassword(e.target.value)} type={passwordType}></TextField>
                    <VisibilityIcon style={{ position: 'absolute', right: '0', top: '10px' }} onClick={clearUsername} />
                </div>

                <Tooltip title="Login">
                    <Button variant='contained' onClick={loginClick} type='button'>Login</Button>
                </Tooltip>

            </div>
        </div>
    )
}

