import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

// this is for the header
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>

      {/* the LInk tag takes the to attibute */}
        <Link className= 'navbar-brand text-light' to='/'> Stock prediction portal</Link>
        
      <div>
        <Button text='Login' class='btn btn-outline-info' url ='/login'/>
        &nbsp;
        {/* this is the register button */}
        <Button text='Register' class='btn-info' url ='/register'/>

      </div>
    </nav>
    
    
    
    </>
  )
}

export default Header