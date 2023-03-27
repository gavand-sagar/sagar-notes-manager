import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFact = createAsyncThunk('getFact', () => {
    return fetch('https://catfact.ninja/fact')
        .then(x => x.json())
})


const catFactSlice = createSlice({
    name: 'catFact',
    initialState: {
        fact: '',
        loadingFact: false
    },
    extraReducers: (builder) => {

        //what should happen when api initiated
        builder.addCase(getFact.pending, (state, action) => {
            //action.payload is the response from the api
            state.loadingFact = true
        })

        //what should happen when api will get the data 
        builder.addCase(getFact.fulfilled, (state, action) => {
            //action.payload is the response from the api
            state.fact = action.payload.fact
            state.loadingFact = false
        })
    }
})

export default catFactSlice;