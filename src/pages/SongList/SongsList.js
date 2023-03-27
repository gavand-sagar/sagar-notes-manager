import React from 'react'
import { useSelector } from 'react-redux'
import SongItem from './SongItem'

export default function SongsList() {

    const songs = useSelector(store => store.songs.songs)

    return (
        <div>
            {
                songs.map(x => <SongItem song={x}/>)
            }
        </div>
    )
}
