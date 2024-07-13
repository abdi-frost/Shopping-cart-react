import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: localStorage.getItem("theme") ? 
                (localStorage.getItem("theme")) : 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle(state) {
            state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light'
        }
    }
})

export const { toggle } = themeSlice.actions
export default themeSlice.reducer