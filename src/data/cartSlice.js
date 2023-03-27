import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCount: 6,
        totalProducts: 10
    },
    reducers: {
        incrementCart: (state, action) => {
            state.cartCount = state.cartCount + 1;
        },
        changeTotal: (state, action) => {
            state.totalProducts = action.payload
        }
    }
})

export const { incrementCart, changeTotal } = cartSlice.actions

export default cartSlice;