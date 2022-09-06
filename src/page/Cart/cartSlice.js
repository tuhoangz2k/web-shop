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
            const index = state.findIndex((cartItem) => cartItem.id === action.payload.id);
            if (index >= 0) {
                state[index].quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        removeCart: (state, action) => {
            const cartIndex = state.findIndex((cartItem) => cartItem.product.id === action.payload);
            state.splice(cartIndex, 1);
        },
        removeAll: (state, action) => {
            state = [];
        },
    },
});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
