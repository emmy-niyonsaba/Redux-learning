import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux' 
import userReducer from './features/user'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'


  const store = configureStore({
    reducer: {
      user: userReducer
    }
  })
function App() {


  return (
    <>
      <Provider store={store}>
        <Profile />
        <Login />
      </Provider>
    </>
      
   
  )   
  
}

export default App
