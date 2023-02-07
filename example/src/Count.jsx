import React from 'react'
import {useState} from 'react'
function Count() {

    const [count, setCount] = useState(0)
  return (
  
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>incement</button>
      <button onClick={()=>setCount(count -1)}>decremetn</button>
      <button onClick={()=>setCount(count * 5)}>5 ile çarp</button>
      <button onClick={()=>setCount(0)}>reset</button>
      

    </div>
  )
}

export default Count
