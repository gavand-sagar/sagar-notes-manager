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

    function dropHandler(ev) {
        console.log("File(s) dropped");

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    uploadFile(file)
                    console.log(`… file[${i}].name = ${file.name}`);
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    }

    function dragOverHandler(ev) {
        console.log("File(s) in drop zone");

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }



    return (
        <div onDragOver={dragOverHandler} onDrop={dropHandler} className='file-upload-component'>
            <label htmlFor='app-file-upload'>
                <CameraAltIcon />
            </label>
            <br />
            {uploadState != 'Uploading...' && fileName == ''
                ? "Drop Files or Click here To upload"
                : ""
            }
            <input id="app-file-upload" onChange={upload} label="Song Image" type='file' />
            <br />
            <br />
            {
                uploadState
            }
            {
                uploadState != 'Uploading...' && fileName && <img src={'http://localhost:3001/image/' + fileName} />
            }

        </div>
    )
}
