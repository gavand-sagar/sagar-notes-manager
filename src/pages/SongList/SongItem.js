import React from 'react'
import { commonDelete } from '../../shared/utils/utils'
import { useDispatch } from 'react-redux'
import { setSongs } from '../../data/songSlice'

export default function SongItem({ song }) {
    const dispatch = useDispatch()
    function deleteSong() {
        let c = window.confirm("Are you sure, you want to delete this song?")
        if (c == true) {
            commonDelete('/songs/' + song._id)
                .then(response => {
                    dispatch(setSongs(response))
                })
        }
    }
    return (
        <div className='song-item' onClick={deleteSong}>
            <div><img height={100} width={100} src={'http://localhost:3001/image/' + song.songImage} /></div>
            <div>{song.songName}</div>
            <div>{song.rating}</div>
        </div>
    )
}
