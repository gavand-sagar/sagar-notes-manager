import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonGet } from "../shared/utils/utils";

export const fetchSongs = createAsyncThunk('fetchSongs',()=>{
    return commonGet('/songs')
})

const songSlice = createSlice({
    name: 'songs',
    initialState: {
        songs: [],
        isSongLoading:false
    },
    reducers: {
        addSong: (state, action) => {
            const newSong = action.payload;            
            state.songs.push(newSong)
        },
        setSongs: (state, action) => {
            state.songs = [...action.payload]
        }
    },
    extraReducers:(builder)=>{
        //while api is pending
        builder.addCase(fetchSongs.pending,(state,action)=>{
            state.isSongLoading = true;
        })
        // valid api response
        builder.addCase(fetchSongs.fulfilled,(state,action)=>{
            state.songs = [...action.payload]
            state.isSongLoading = false;
        })
    }
})

export const { addSong, setSongs } = songSlice.actions

export default songSlice;