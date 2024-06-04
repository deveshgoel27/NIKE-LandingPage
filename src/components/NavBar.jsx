import React from 'react'

function NavBar() {
  return (
       <nav className='container'>
          <div className='logo'>
            <img src='public\images\brand_logo.png' alt='logo'/>
          </div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button className='main'>Login</button>
       </nav>
  )
}

export default NavBar