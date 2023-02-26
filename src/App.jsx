import { useState } from 'react'

import './App.css'
import MemoTest from './Components/MemoTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <MemoTest />
    </div>
  )
}

export default App
