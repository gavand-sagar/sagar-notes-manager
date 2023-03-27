import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { addSong } from '../../data/songSlice';

export default function AddSong() {
    const { register, handleSubmit } = useForm();
    
    const dispatch = useDispatch()


    function save(formData) {
        // add this song in redux state
        dispatch(addSong(formData))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <TextField label="Song Name" {...register('songName')} />
                <br />
                <br />
                <TextField label="Rating" {...register('rating')} />
                <br />
                <br />
                <Button variant='contained' type='submit'>Add</Button>
            </form>
        </div>
    )
}
