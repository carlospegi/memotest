import { useState } from 'react'

import './App.css'
import MemoTest from './Components/MemoTest'
import Wpm from './Components/Wpm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    
    {/* <MemoTest /> */}
    <Wpm />
    </div>
  )
}

export default App
