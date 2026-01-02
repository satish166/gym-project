import { useState } from 'react'

import HomePage from './pages/home/Home';
import Header from './components/header/Header';
import './App.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <HomePage></HomePage>
    </>
  )
}

export default App
