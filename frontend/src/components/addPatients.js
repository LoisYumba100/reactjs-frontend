import '../addDoctors.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function AddPatients() {
  const navigate = useNavigate();
  return (
    <div className='form'>
        <h2>New Patient</h2><br/>
        <form className='form2'>
            <input
                type='int'
                className='L'
                required='required'
                placeholder='Enter id...'
                />
                <br/>
                <br/>
                <input
                type='text'
                className='L'
                required='required'
                placeholder='Enter Fist name...'
                /><br/>
                <br/>
                <input
                type='text'
                className='L'
                required='required'
                placeholder='Enter Last name...'
                /><br/>
                <br/>
                <input
                type='email'
                className='L'
                required='required'
                placeholder='Enter email...'
                /><br/>
                <br/>
                
                <input
                type='password'
                className='L'
                required='required'
                placeholder='Enter password...'
                />
                <br/>
                
                <br/>
                <input
                type='password'
                className='L'
                required='required'
                placeholder='confirm password...'
                />
                <br/>
                <br/>
                <button type='submit' className='sb'onClick={() => {navigate('/')}}>CLOSE</button>{' '}
                <button  className='sb'onClick={() => {navigate('/finaldoctorsdb')}}>ADD</button>
        </form>
      
    </div>
  )
}

export default AddPatients
