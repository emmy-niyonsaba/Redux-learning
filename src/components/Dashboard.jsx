
import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { checkName } from '../features/admin'
function Dashboard() {
    const user = useSelector((state)=>state.admin.value)
console.log(user)
    
  return (
    <div>
 
   <p>{user.age}</p>
   <p>{user.name}</p>
   
 

    </div>
  )
}

export default Dashboard
