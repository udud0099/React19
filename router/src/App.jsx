// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'

function App() { 

  return (
    <>
      <h1 className='text-8xl text-green-700'>Let's Ready</h1>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
