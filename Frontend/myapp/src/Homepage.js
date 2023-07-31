import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Homepage () {
  
useEffect(()=>{
  axios.get("http://localhost:5555/newbooks/data").then((res)=>console.log(res))
},[])


  return (
    <div>
        <h1>BOOKSTORE</h1>
       
     </div>
  )
}

export default Homepage 