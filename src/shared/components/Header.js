import React from 'react'
import { Link } from 'react-router-dom'
import FancyButton from '../../FancyButton'
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    return (
        <div>
            <Link to={'/home'}>
                <FancyButton>Home</FancyButton>
            </Link>

            <Link to={'/login'}>
                <FancyButton>Login</FancyButton>
            </Link>


            <Link to={'/sign-up'}>
                <FancyButton>Signup</FancyButton>
            </Link>

            <Link to={'/about'}>
                <FancyButton>about</FancyButton>
            </Link>

            <Link to={'/gallery'}>
                <FancyButton>gallery</FancyButton>
            </Link>

            <Link to={'/privacy'}>
                <FancyButton>Privacy</FancyButton>
            </Link>

            <LogoutIcon/>
        </div>
    )
}
