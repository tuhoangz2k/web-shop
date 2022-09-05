import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    // {
    //     product: {},
    //     quantity: 0,
    // },
];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.product = true;
        },
        removeCart: (state, action) => {
            state.product = false;
        },
    },
});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
