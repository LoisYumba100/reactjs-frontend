
import './App.css';
import React from 'react';
import AddDoctors from './components/addDoctors';
import NotFound from './components/notFound';
import FinalDb from './components/finalDb';
import FinalPdb from './components/finalPdb'
import Finaldoctorsdb from './components/finaldoctorsdb';
import UserLogin from './components/userLogin';
import {Routes, Route} from 'react-router-dom';
import LoginForm from './components/loginForm';
import DashBnav from './components/dashBnav';
import Patientsnav from './components/patientsnav';
import Doctorsnav from './components/doctorsnav';
import AdminDb from './components/adminDb';
import Doctorsdb from './components/doctorsdb';
import PatientsDb from './components/patientsDb';
import Proceed from './components/proceed';
import ThankU from './components/thankU';

import {AddAppointment, AddPatients} from "./components"




 function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<UserLogin />}/>
        

        <Route  path='/loginForm' element = {<LoginForm />}/>
         
       

        <Route exact path='/finaldoctorsdb' element = {<Finaldoctorsdb />}/>
         
      

        <Route exact path='/finalDb' element = {<FinalDb />}/>
        
        

        <Route exact path='/finalPdb' element = {<FinalPdb />}/>
        
       

        <Route exact path='/addAppointment' element = {<AddAppointment />}/>
          
        

        <Route exact path='/addDoctors' element = {<AddDoctors />}/>
         
      

        <Route exact path='/addPatients' element = {<AddPatients />}/>
         
        <Route exact path='*' element = {<NotFound />}/>

        <Route exact path='/dashBnav' element = {<DashBnav />}/>

        <Route exact path='/patientsnav' element = {<Patientsnav />}/>

        <Route exact path='/doctorsnav' element = {<Doctorsnav />}/>

        <Route exact path='/adminDb' element = {<AdminDb />}/>

        <Route exact path='/doctorsdb' element = {<Doctorsdb />}/>

        <Route exact path='/patientsDb' element = {<PatientsDb />}/>

        <Route exact path='/proceed' element = {<Proceed />}/>

        <Route exact path='/thankU' element = {<ThankU />}/>
      </Routes>
      </div>
  )
}

export default App;

     
  
