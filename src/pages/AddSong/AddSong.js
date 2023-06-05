import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { UserDataContext } from '../../shared/data';
import { createSong } from '../../data/songSlice';
import { commonRawPost } from '../../shared/utils/utils';
import FileUpload from '../../shared/components/FileUpload';

export default function AddSong() {
    const { register, handleSubmit } = useForm();
    const { token } = useContext(UserDataContext)
    const dispatch = useDispatch()
    const [fileName,setFileName] = useState('')

    function save(formData) {
        formData["songImage"] = fileName
        dispatch(createSong(formData))
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <FileUpload onUpload={(name)=>setFileName(name)}/>
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
