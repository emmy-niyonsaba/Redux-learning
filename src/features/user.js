
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    age: 0,
    isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => { 
            state.name = action.payload.name
            state.email = action.payload.email
            state.age = action.payload.age
            state.isLoggedIn = true
        } ,
        logout: (state) => {
            state.name = ''

                