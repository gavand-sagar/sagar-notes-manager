import React from 'react'
import { Link } from 'react-router-dom'
import FancyButton from '../../FancyButton'

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

            <Link to={'/random-user'}>
                <FancyButton>Random User</FancyButton>
            </Link>

            <Link to={'/add-song'}>
                <FancyButton>Add Song</FancyButton>
            </Link>

            <Link to={'/songs-list'}>
                <FancyButton>Song List</FancyButton>
            </Link>

            <Link to={'/jokes'}>
                <FancyButton>Jokes</FancyButton>
            </Link>

            
        </div>
    )
}
