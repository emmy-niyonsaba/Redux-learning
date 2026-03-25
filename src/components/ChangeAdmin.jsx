import { useDispatch } from "react-redux";
import { changeName } from "../features/admin";
import { useState } from "react";


function ChangeAdmin () {
    const [admin ,setAdmin]= useState({
        age:12,
        name:"Admin"
    })
    console.log(admin)
    const dis = useDispatch()
  return (
    <div>
      <input type="number" name="age" id="" placeholder="Change age" onChange={(e)=>setAdmin({...admin,age:e.target.value})}/>
      <input type="text" name="admin" id="" placeholder="Change name" onChange={(e)=>setAdmin({...admin,name:e.target.value})}/>
      
      <button onClick={()=>{dis(changeName(admin))}}>Change</button>
    </div>
  )
}

export default ChangeAdmin
