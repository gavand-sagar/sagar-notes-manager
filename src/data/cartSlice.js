import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCount: 6,
        totalProducts: 10,
        songs: []
    },
    reducers: {
        incrementCart: (state, action) => {
            state.cartCount = state.cartCount + 1;
        },
        changeTotal: (state, action) => {
            state.totalProducts = action.payload
        },
        addSong: (state, action) => {
            const newSong = action.payload;
            state.songs.push(newSong)
            // state.songs = [...state.songs, newSong] // push in array 
        }
    }
})

export const { incrementCart, changeTotal,addSong } = cartSlice.actions

export default cartSlice;