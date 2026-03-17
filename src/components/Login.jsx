import React from 'react'
import { useDispatch } from 'react-redux'
import { login ,logout} from '../features/user'
function Login() {
  const dispatch = useDispatch()

  const handleLogin = () => {
    const userData = {
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com'
    }
    dispatch(login(userData))
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => dispatch(logout({name: "logged out", age: "Logged out", email: "Logged out"}))}>Logout</button>
    </div>
  )
}

export default Login
