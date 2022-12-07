import "../addDoctors.css"
import React from 'react'
import {useNavigate} from 'react-router-dom'

function AddAppointment() {
  const navigate = useNavigate();
  return (
    <div className='form'>
        <h2>Add appointment</h2><br/>
        <form className='form2'>
            <input
                type='text'
                className='L'
                required='required'
                placeholder='Describe appointment...'
                />
                <br/>
                <br/>
                <input
                type='date'
                className='L'
                required='required'
                placeholder='Enter Fist name...'
                /><br/>
                <br/>
                <input
                type='time'
                className='L'
                required='required'
                placeholder='Enter Last name...'
                /><br/>
                <br/>
               
                <button type='submit' className='sb'onClick={() => {navigate('/')}}>CLOSE</button>{' '}
                <button  className='sb'onClick={() => {navigate('/thankU')}}>ADD</button>
                <br/>
                <br/>
                <p>An available doctor will take up this appointment after submission</p>
        </form>
      
    </div>
  )
}

export default AddAppointment