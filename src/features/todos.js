
import { createSlice } from "@reduxjs/toolkit";
const intialStateValue = [{ id: 1, text: "Learn Redux", completed: false }];
export const todosSlice = createSlice({
    // name of the slice
    name: 'todos',
    // initial state of the slice
    initialState: {
        value: intialStateValue
    },
    // reducers are the functions that will be called when the action is dispatched
    reducers: {
        getAllTodos: (state) => {
            return state.value;
        },
       
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);
        },
       
    }
});
export default todosSlice.reducer;
export const { addTodo, removeTodo,getAllTodos } = todosSlice.actions;