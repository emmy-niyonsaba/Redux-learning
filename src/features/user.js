
import { createSlice } from '@reduxjs/toolkit'
const intialStateValue = {
    name: 'No name now',
    age: "no age now",
    email: "example@gmail.com"    
}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: intialStateValue
    },
    reducers: {  
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state,action) => {
            state.value = action.payload
        }               
    }
})

export default userSlice.reducer
export const { login, logout } = userSlice.actions