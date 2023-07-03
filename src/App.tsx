import { useState } from 'react'

import './App.css'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    React TypeScript
    <Counter>{(num:number)=><>current count : {num}</>}</Counter>
    </>
  )
}

export default App 
