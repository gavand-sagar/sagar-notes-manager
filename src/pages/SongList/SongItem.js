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
            <div>{song.songName}</div>
            <div>{song.rating}</div>
        </div>
    )
}
