import { createSelector } from '@reduxjs/toolkit';
export const productListSelector = (state) => state.products.productList;
export const isLoginSelector = (state) => state.login.isLogin;
export const cartQuantity = (state) => state.cart.length;
export const cartItems = (state) => state.cart;

export const subtotalCartSelector = createSelector(cartItems, (item) =>
    item.reduce((acc, item) => {
        const total = acc + item.quantity * item.product.price;
        return total;
    }, 0),
);
