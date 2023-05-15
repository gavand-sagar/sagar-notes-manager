import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongItem from './SongItem'
import { fetchSongs } from '../../data/songSlice'
import { Skeleton } from '@mui/material'

export default function SongsList() {

    const { songs } = useSelector(state => state.songs)
    const { isSongLoading } = useSelector(state => state.songs)
    const dispatch = useDispatch()

    useEffect(() => {
        // on page load 
        // call an API to get the Songs data
        if (songs.length == 0) {
            dispatch(fetchSongs())
        }
    }, [])

    function sortDataByName() {
        let newSongs = [...songs].sort((a, b) => a.songName.toLowerCase() < b.songName.toLowerCase() ? -1 : 0)
        // setSongs(newSongs)
    }

    function sortDataByRating() {
        let newSongs = [...songs].sort((a, b) => Number(a.rating) < Number(b.rating) ? -1 : 0)
        //setSongs(newSongs)
    }

    return (
        <div>
            <button onClick={sortDataByName}>Sort By Name</button>
            <button onClick={sortDataByRating}>Sort By Rating</button>
            {
                isSongLoading ?
                    <>
                        <SongItem song={<Skeleton></Skeleton>} />
                        <SongItem song={<Skeleton></Skeleton>} />
                        <SongItem song={<Skeleton></Skeleton>} />
                    </>
                    : songs.map(x => <SongItem song={x} />)
            }
        </div>
    )
}
