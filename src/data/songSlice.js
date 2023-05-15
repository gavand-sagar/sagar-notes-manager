import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonGet, commonPost } from "../shared/utils/utils";

export const fetchSongs = createAsyncThunk('fetchSongs',()=>{
    return commonGet('/songs')
})

export const createSong = createAsyncThunk('createSong',(data)=>{
    return commonPost('/songs',data)
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


       
        //while api is pending
        builder.addCase(createSong.pending,(state,action)=>{
            
        })
        // valid api response
        builder.addCase(createSong.fulfilled,(state,action)=>{
            state.songs = [...action.payload]
        })
    }
})

export const { addSong, setSongs } = songSlice.actions

export default songSlice;