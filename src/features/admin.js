import { createSlice } from "@reduxjs/toolkit";


export const Admin = createSlice({
    name: "admin",
    initialState:{value: {name: "admim",age:12}},
    reducers:{
        //action 
        checkName: (state)=>{
            return state.name
        },
        changeName: (state,action)=>{
            state.value =action.payload
        }
    
    }
})

export default Admin.reducer
export const {checkName,changeName} =Admin.actions