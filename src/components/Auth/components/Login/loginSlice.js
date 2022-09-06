import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.isLogin = true;
        },
        logout: (state, action) => {
            state.isLogin = false;
        },
    },
});
export const { setLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
