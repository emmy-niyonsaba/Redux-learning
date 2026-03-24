import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux' 
import userReducer from './features/user'
import themeReducer from './features/theme'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'
// import { useSelector } from 'react-redux'
import todosReducer from './features/todos'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'



  const store = configureStore({
    reducer: {
      user: userReducer,
      theme: themeReducer,
      todos: todosReducer

    }
  })
function App() {


  return (
    <>
      <Provider store={store}>
          <Profile />
        <Login />
        <ChangeColor />
        <Todos/>
        <AddTodo/>
      </Provider>
    </>
      
   
  )   
  
}

export default App
