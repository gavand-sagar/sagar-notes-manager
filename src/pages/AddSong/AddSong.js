import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { UserDataContext } from '../../shared/data';
import { createSong } from '../../data/songSlice';
import { commonRawPost } from '../../shared/utils/utils';

export default function AddSong() {
    const { register, handleSubmit } = useForm();
    const { token } = useContext(UserDataContext)
    const dispatch = useDispatch()
    const [fileName,setFileName] = useState('')

    function save(formData) {
        formData["songImage"] = fileName
        dispatch(createSong(formData))
    }

    function upload(){
        const avatar = document.getElementById('app-file-upload').files[0]
        uploadFile(avatar)
    }

    function uploadFile(avatar) {
        let data = new FormData();
        data.append('myFile', avatar)
        commonRawPost('/app-image-upload',data).then(x=>{
            setFileName(x.filename)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input id="app-file-upload" onChange={upload} label="Song Image" type='file' />
                <br />
                <br />
                <img src={'http://localhost:3001/image/' + fileName}/>
                <br />
                <br />
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
