import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: []
    },
    reducers: {
        addSong: (state, action) => {
            const newSong = action.payload;
            state.songs.push(newSong)
        }
    }
})

export const { addSong } = songSlice.actions

export default songSlice;