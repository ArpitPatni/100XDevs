import React, { memo, useCallback, useState } from 'react'

function FourthTask() {
    const [count,setCount]=useState(0)
   const inputFunction=useCallback(()=>{
    console.log("Hi there")
   },[])
  return (
    <div>
        <Child inputFunction={inputFunction}/>
        <button onClick={()=>setCount(count+1)}>Click me {count}</button>
    </div>
  )
}

const Child=memo(({inputFunction})=>{
    console.log("child render")
    return <div>
        <button>Button Clicked</button>
    </div>
})

export default FourthTask