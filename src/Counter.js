import React, { useState } from 'react'
import useCount from './useCount'

const Counter = () => {


   const [count,setCount] = useState(0)

   const incrementCount = () => {
    setCount(count+1)
   }

   useCount(count)


  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Counter
