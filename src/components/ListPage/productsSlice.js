import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: [],
    filters: {},
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.productList = action.payload;
        },
    },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
