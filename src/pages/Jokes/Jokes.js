import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAJoke } from '../../data/jokeSlice'
import Joke from './Joke'
import JokeSkeleton from './JokeSkeleton'

export default function Jokes() {
    const joke = useSelector(store => store.joke.joke)
    const loadingJoke = useSelector(store => store.joke.loadingJoke)
    const dispatch = useDispatch();
    function getJoke() {
        dispatch(getAJoke())
    }
    return (
        <div>
            <Button variant='contained' onClick={getJoke}>Tell me a Joke</Button>
            {loadingJoke ? <JokeSkeleton></JokeSkeleton> : <Joke joke={joke} />}
        </div>
    )
}
