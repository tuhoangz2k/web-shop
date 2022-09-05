import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../components/ListPage/productsSlice';
export const store = configureStore({
    reducer: {
        products: productsSlice,
    },
});
