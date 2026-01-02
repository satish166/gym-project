import { useState } from 'react'

import './App.scss'
import HomePage from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage></HomePage>
    </>
  )
}

export default App
