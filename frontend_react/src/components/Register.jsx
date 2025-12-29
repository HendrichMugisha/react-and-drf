import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) => {

    // this is to prevent the page from reloading
    e.preventDefault();
    setLoading(true);


    const userData = {
      username, email, password
    }
    try {
      // this will now wait for the backend response
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register', userData)

      // when the response returns then log it
      console.log('respose.data +==>', response.data)
      console.log('registration success!')
      setErrors({})
      setSuccess(true)
    } catch (error) {
      setErrors(error.response.data)
      console.log('registration failed', error.response.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container text-light  '>
        <div className='row justify-content-center  bg p-5 rounded '>
          <div className='col-md-6'>
            <h3>create an account</h3>

            {/* this is the form */}

            <form onSubmit={handleRegistration}>
              {/* whatever is typed it will be stored to the state */}
              <div className='mb-3'>

                <input type="text" className='form-control' placeholder='enter user name' value={username} onChange={(e) => setUsername(e.target.value)} />
                {/* this is to print the error */}
                <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>

              </div>

              <div className='mb-3'>
                <input type="email" className='form-control ' placeholder='enter the email address' value={email} onChange={(e) => setEmail(e.target.value)} />

                <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
              </div>

              <div className='mb-3'>

                <input type="password" className='form-control ' placeholder='set password' value={password} onChange={(e) => setPassword(e.target.value)} />


                <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
              </div>


              {success && <div className='alert  alert-success'>Registration Successful!</div>}

              {loading ? ( 
                <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin/> Please wait ...</button>
              ) : (

                <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
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

export default Register