import React from 'react'
import { commonDelete } from '../../shared/utils/utils'

export default function SongItem({ song }) {
    function deleteSong(){
        commonDelete('/songs/' + song._id)
        .then(response=> {

        })
    }
    return (
        <div className='song-item' onClick={deleteSong}>
            <div>{song.songName}</div>
            <div>{song.rating}</div>
        </div>
    )
}
