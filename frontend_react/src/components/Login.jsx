import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

// this is the component for the login page

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const {isLoggedIn, setIsLoggedIn } =useContext(AuthContext)

  const handleLogin = async (e) =>{
        e.preventDefault()
        setLoading(true)

        const userData = {username, password}
        // console.log('userdata', userData)

        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)

            localStorage.setItem('accessToken', response.data.access)
            localStorage.setItem('refreshToken', response.data.refresh)
            console.log('login successful')
            setIsLoggedIn(true)
            navigate('/')

        }catch(error){
          console.error('Invalid credentials')
          setError('Invalid credentials')
        }finally{

          setLoading(false)
        }
        
  }

  return (
<>
      <div className='container text-light  '>
        <div className='row justify-content-center  bg p-5 rounded '>
          <div className='col-md-6'>
            <h3>Log into the portal</h3>

            {/* this is the form */}

            <form onSubmit={handleLogin}>
              {/* whatever is typed it will be stored to the state */}
              <div className='mb-3'>

                <input type="text" className='form-control' placeholder='enter user name' value={username} onChange={(e) => setUsername(e.target.value)} />


              </div>



              <div className='mb-3'>

                <input type="password" className='form-control ' placeholder='set password' value={password} onChange={(e) => setPassword(e.target.value)} />

              </div>
                {error && <div className='text-danger'>{error}</div> }


              {loading ? ( 
                <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin/> Logging in ...</button>
              ) : (

                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
              )
              }

              {/* this is the submit button */}



            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login