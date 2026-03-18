import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux' 
import userReducer from './features/user'
import themeReducer from './features/theme'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import ChangeColor from './components/ChangeColor'
import { useSelector } from 'react-redux'



  const store = configureStore({
    reducer: {
      user: userReducer,
      theme: themeReducer
    }
  })
function App() {


  return (
    <>
      <Provider store={store}>
          <Profile />
        <Login />
        <ChangeColor />
      </Provider>
    </>
      
   
  )   
  
}

export default App
