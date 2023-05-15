import React, { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import SongItem from './SongItem'
import { UserDataContext } from '../../shared/data';
import { commonGet } from '../../shared/utils/utils';

export default function SongsList() {
   
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        // on page load 
        // call an API to get the Songs data
        commonGet('/songs')
        .then(data => {
                // ""data"" is the json response sent from the server!!!
                setSongs(data)
            })


            
    }, [])

    function sortDataByName() {
        let newSongs = [...songs].sort((a, b) => a.songName.toLowerCase() < b.songName.toLowerCase() ? -1 : 0)
        setSongs(newSongs)
    }

    function sortDataByRating() {
        let newSongs = [...songs].sort((a, b) => Number(a.rating) < Number(b.rating) ? -1 : 0)
        setSongs(newSongs)
    }

    return (
        <div>
            <button onClick={sortDataByName}>Sort By Name</button>
            <button onClick={sortDataByRating}>Sort By Rating</button>
            {
                songs.map(x => <SongItem song={x} />)
            }
        </div>
    )
}
