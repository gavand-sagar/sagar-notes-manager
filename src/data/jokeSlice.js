import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAJoke = createAsyncThunk('getAJoke', () => {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(x => x.json())
})


const JokeSlice = createSlice({
    name: 'joke',
    initialState: {
        joke: {},
        loadingJoke: false
    },
    extraReducers: (builder) => {

        //what should happen when api initiated
        builder.addCase(getAJoke.pending, (state, action) => {
            //action.payload is the response from the api
            state.loadingJoke = true
        })

        //what should happen when api will get the data 
        builder.addCase(getAJoke.fulfilled, (state, action) => {
            //action.payload is the response from the api
            state.joke = action.payload
            state.loadingJoke = false
        })
    }
})

export default JokeSlice;