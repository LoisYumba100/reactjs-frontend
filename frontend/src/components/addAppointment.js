import "../addDoctors.css";
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {addAppointment} from '../api';
import { useState } from "react";

function AddAppointment() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    appointmentDetails: "",
    appointmentDate: ""
  }); 

  const onSubmit = async (e) => {
    // prevent page from reloading when a form is submitted
    e.preventDefault()

    await addAppointment(appointment).then(() => {
      navigate('/thankU') 
    }).catch((e) => console.log(e))
     

    // onClick={() => {navigate('/finaldoctorsdb')}}
  }
  
  return (
    <div className='form'>
        <h2>Add appointment</h2><br/>
        <form className='form2'  onSubmit={onSubmit}>
            
        <textarea  type='text'
                className='L'
                required='required'
                placeholder='Appointment details...'
                onChange={(e) => setAppointment({...appointment, appointmentDetails: e.target.value})}
                value={appointment.appointmentDetails}/>
                
                
                <br/>
                <br/>
                <input
                type='date'
                className='L'
                required='required'
                placeholder='Enter date...'
                onChange={(e) => setAppointment({...appointment, appointmentDate: e.target.value})}
                value={appointment.appointmentDate}
                /><br/>
                <br/>
                
                <br/>
                <br/>
               
                <button type='submit' className='sb'onClick={() => {navigate('/')}}>CLOSE</button>{' '}
                <button  className='sb'>ADD</button>
                <br/>
                <br/>
                <p>An available doctor will take up this appointment after submission</p>
        </form>
      
    </div>
  )
}

export default AddAppointment