import React from 'react'

export default function SongItem({ song }) {
    return (
        <div className='song-item'>
            <div>{song.songName}</div>
            <div>{song.rating}</div>
        </div>
    )
}
