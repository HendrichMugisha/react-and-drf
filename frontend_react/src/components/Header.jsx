import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// this is for the header
const Header = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout  = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('logged out')
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>

        {/* the LInk tag takes the to attibute */}
        <Link className='navbar-brand text-light' to='/'> Stock prediction portal</Link>

        <div>
          {isLoggedIn ? (
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          ) : (
            <>                    
            <Button text='Login' class='btn btn-outline-info' url='/login' />
              &nbsp;

              <Button text='Register' class='btn btn-info' url='/register' />
            </>

          )}


        </div>
      </nav>



    </>
  )
}

export default Header