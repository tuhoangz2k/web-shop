import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    // {
    //     product: {},
    //     quantity: 0,
    //      id:
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
        setCartQuantity: (state, action) => {
            // payload:{id, quantity}
            const index = state.findIndex((item) => item.id === action.payload.id);
            state[index].quantity = action.payload.quantity;
        },

        increaseCartQuantity: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (state[index].quantity >= 99) return;
            state[index].quantity += 1;
        },

        decreaseCartQuantity: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (state[index].quantity <= 1) return;
            state[index].quantity -= 1;
        },

        removeCart: (state, action) => {
            const cartIndex = state.findIndex((cartItem) => cartItem.product.id === action.payload);
            state.splice(cartIndex, 1);
        },
        removeAll: (state, action) => {
            return (state = []);
        },
    },
});
export const { addCart, removeCart, removeAll, setCartQuantity, decreaseCartQuantity, increaseCartQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
