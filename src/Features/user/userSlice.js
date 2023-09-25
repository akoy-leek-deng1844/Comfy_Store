import { createSlice } from "@reduxjs/toolkit";
const themes = {
  winter: "winter",
  dark: "dark",
};
const getStoredUser = () => {
   return JSON.parse(localStorage.getItem('user')) || null;
}
const getStoredTheme = () => {
   const theme = localStorage.getItem("theme") || themes.winter;
    document.documentElement.setAttribute("data-theme", theme); 
    return theme;
};

const initialState = {
    user: getStoredUser(),
    theme: getStoredTheme(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginIn: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        logOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        toggleTheme: (state) => {
            const { winter, dark } = themes;
            state.theme = state.theme === dark ? winter : dark;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        },
    }
});
export const { loginIn, logOut, toggleTheme } = userSlice.actions;
export default userSlice.reducer;