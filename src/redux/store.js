import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../components/Auth/components/Login/loginSlice';
import productsSlice from '../components/ListPage/productsSlice';
import cartSlice from '../page/Cart/cartSlice';
export const store = configureStore({
    reducer: {
        products: productsSlice,
        login: loginSlice,
        cart: cartSlice,
    },
});
