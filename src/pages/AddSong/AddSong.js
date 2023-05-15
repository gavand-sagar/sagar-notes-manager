import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { UserDataContext } from '../../shared/data';
import { createSong } from '../../data/songSlice';

export default function AddSong() {
    const { register, handleSubmit } = useForm();
    const { token } = useContext(UserDataContext)
    const dispatch = useDispatch()


    function save(formData) {
        dispatch(createSong(formData))
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
