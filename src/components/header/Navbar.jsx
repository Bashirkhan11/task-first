import React, { useState } from 'react'
import './Navbar.css';

export default function Navbar() {
  const [value, setValue] = useState(false);

  const handleClick = ()=>{
    setValue(!value);
  }
  console.log(value);


  return (
    <nav className='nav'>
        <img className='logo' src='images/navnarlogo.png' alt='logo...'/>
        <img onClick={handleClick} className='toggol' src="images/toggol.png" alt="toggle...." />
     <ul className={`list ${value && 'activelist'}`}>
        <li><a>Home</a></li> 
        <li><a>Program</a></li>
        <li><a>About us</a></li>
        <li><a>Campus</a></li>
        <li><a>Testimonials</a></li>
        <li><a className='button'>Contact us</a></li>
     </ul>
    </nav>
  )
}
