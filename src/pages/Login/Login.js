import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Tooltip } from '@mui/material'
import { UserDataContext } from '../../shared/data';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from 'react-hook-form';
import { commonGet } from '../../shared/utils/utils';

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    const [passwordType, setPasswordType] = useState('password');

    const { setUsernameGlobal,setToken } = useContext(UserDataContext)

    const navigate = useNavigate()

    function loginClick(formObj) {

        let url = '/authenticate?username='+formObj.username+'&password=' + formObj.password
        commonGet(url)
        .then(response=>{
            if(response.authenticated == true){
                setUsernameGlobal(formObj.username)
                setToken(response.token)
                navigate('/home')
            }else{
                alert("incorrect username or password ")
                setUsernameGlobal("")
            }
        })
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
                <form onSubmit={handleSubmit(loginClick)}>
                    <Typography>Plese Login!!!</Typography>

                    <TextField error={errors.username} helperText={errors.username?.message}  {...register('username', { required: "Username is required" })} label={'Username'} type={'text'}></TextField>

                    <div style={{ position: 'relative' }}>
                        <TextField error={errors.password} helperText={errors.password?.message} {...register('password', { required: "Passord is required" })} label={'Password'} type={passwordType}></TextField>
                        <VisibilityIcon style={{ position: 'absolute', right: '0', top: '10px' }} onClick={clearUsername} />
                    </div>

                    <Tooltip title="Login">
                        <Button variant='contained' type='submit'>Login</Button>
                    </Tooltip>
                </form>
            </div>
        </div>
    )
}

