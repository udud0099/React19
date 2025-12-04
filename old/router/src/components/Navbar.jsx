import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      Navbar
Navbar
<div>
    <ul>
      <Link to="/"><li>Home</li></Link>  
        <Link to="/contact"><li>Contact</li></Link>  
        <Link to="/products"><li>Products</li></Link>  
       <Link to="/about"> <li>About</li></Link>  
    </ul>
</div>
    </div>
  )
}

export default Navbar
