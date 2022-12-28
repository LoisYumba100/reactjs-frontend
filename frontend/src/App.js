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
import {AddAppointment, AddPatients} from "./components";
import RequireAuth from "./helpers/RequireAuth";
import { ROLES } from "./helpers/roles";
import Registration from './components/registration';



 function App() {
  return (
    <div>
      <Routes>
     
      
       <Route exact path='/finalDb' element = {<FinalDb />}/>
       <Route exact path='/addDoctors' element = {<AddDoctors />}/>
       <Route exact path='/adminDb' element = {<AdminDb />}/>
       
         
       
        
        <Route exact path='/finaldoctorsdb' element = {<Finaldoctorsdb />}/>
        <Route exact path='/addPatients' element = {<AddPatients />}/>
        <Route exact path='/doctorsdb' element = {<Doctorsdb />}/>
        <Route exact path='/dashBnav' element = {<DashBnav />}/>
        <Route exact path='/doctorsnav' element = {<Doctorsnav />}/>
        
        
         
      
      <Route exact path='/finalPdb' element = {<FinalPdb />}/>
      <Route exact path='/addAppointment' element = {<AddAppointment />}/>
      <Route exact path='/patientsnav' element = {<Patientsnav />}/>
      <Route exact path='/patientsDb' element = {<PatientsDb />}/>
      <Route exact path='/proceed' element = {<Proceed />}/>
      <Route exact path='/thankU' element = {<ThankU />}/>
      <Route exact path='/registration' element = {<Registration />}/>
    

     
        <Route exact path='*' element = {<NotFound />}/>
        <Route exact path = "/" element = {<UserLogin />}/>
        <Route exact path='/loginForm' element = {<LoginForm />}/>
        
        
 
      </Routes>
      </div>
  )
}

export default App;

     
  
