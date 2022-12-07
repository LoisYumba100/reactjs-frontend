
import React from 'react'
import '../userLogin.css'
import {useNavigate} from 'react-router-dom'



function UserLogin() {

  const navigate = useNavigate();
    return (
      <div className='loginb' >
       <form>
   

  <div className="form">
    <h1>Hospital appointment module</h1><br/>
    <h1>User Login</h1>
    <input type="text" placeholder='username'  className="form-control" required='required'/>
    <br/>
    
    
    
   
 
  <br/>

 
  <div className="form-outline mb-4">
    <input type="password" placeholder='password' className="form-control" required='required'/>
    
  </div>
  <br/>

 
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31"  />
        
        <label className="form-check-label" for="form2Example31"> Login as Admin </label>
      </div>
    </div>
    <br/>

    <div className="col">
    
    <p className = 'kfc'><a href="#!">Forgot password?</a>
       Or  <a href="/addPatients">Create account</a></p>
    </div>
  </div>
  
  <div className="text-center">
   


  <button type="submit" className="btn" onClick={() => {navigate('/finaldoctorsdb')}}>Sign in</button>
  <br/>
  </div>

  
  
    
    
    

  </div>
</form>
</div>

      
    );
  }
  
  export default UserLogin;