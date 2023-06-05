import React, { useState } from 'react'
import { commonRawPost } from '../utils/utils';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function FileUpload({ onUpload }) {

    const [fileName, setFileName] = useState('')
    const [uploadState, setUploadState] = useState('')

    function upload() {
        const avatar = document.getElementById('app-file-upload').files[0]
        uploadFile(avatar)
    }

    function uploadFile(avatar) {
        let data = new FormData();
        data.append('myFile', avatar)

        setUploadState('Uploading...')

        commonRawPost('/app-image-upload', data).then(x => {
            setFileName(x.filename)
            onUpload(x.filename)
            setUploadState('')
        })
    }
    return (
        <div className='file-upload-component'>
            <label htmlFor='app-file-upload'>
                <CameraAltIcon />
            </label>
            
            <input id="app-file-upload" onChange={upload} label="Song Image" type='file' />
            <br />
            <br />
            {
                uploadState
            }
            {
                uploadState != 'Uploading...' &&  fileName && <img src={'http://localhost:3001/image/' + fileName} />
            }

        </div>
    )
}
