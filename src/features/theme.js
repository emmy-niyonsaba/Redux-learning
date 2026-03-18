

import { createSlice } from '@reduxjs/toolkit'
const intialStateValue = ''
export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: intialStateValue,
        isColorChanged: false
    },
    reducers: {  
        Change: (state, action) => {
            state.value = action.payload
            state.isColorChanged = false
        },
                  
    }
})

export default themeSlice.reducer
export const { Change } = themeSlice.actions