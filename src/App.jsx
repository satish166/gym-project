import { useState } from 'react'



import { Routes, Route, Link } from "react-router-dom";


import HomePage from './pages/home/Home';
import Header from './components/header/Header';
import AboutUs from './pages/about-us/about-us';
import NotFound from './pages/not-found/not-found';
import './App.scss'
import Footer from './components/footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about.html" element={<AboutUs />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
