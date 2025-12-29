import React from 'react'
import Button from './Button'
import Header  from './Header.jsx'
import Footer  from './Footer.jsx'

// this is the component for the main page setup

const Main = () => {
  return (
    <>


    <div className='container'>
      <div className='p-5 text-center bg rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'>
          
          this is some random text that im typing so fast just to show off
          this is some random text that im typing so fast just to show off
          this is some random text that im typing so fast just to show off
          this is some random text that im typing so fast just to show off
          this is some random text that im typing so fast just to show off
          this is some random text that im typing so fast just to show off
        </p>

        <Button text='Login'  class='btn-warning'/>
     
      </div>
    </div>


    </>
  )
}

export default Main