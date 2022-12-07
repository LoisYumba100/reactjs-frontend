import React, {useState} from 'react'
import data from '../dummydata.json'
import '../adminDb.css'


const Doctorsdb = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Patient name</th>
            <th>Doctor name</th>
            <th>Appointment description</th>
            <th>Appointment time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts)=>(<tr>
            <td>{contacts.id}</td>
            <td>{contacts.PatientName}</td>
            <td>{contacts.DoctorName}</td>
            <td>{contacts.AppontmentDescription}</td>
            <td>{contacts.AppontmentTime}</td>
            <td>{contacts.Status}</td>
            <td>{contacts.Action}</td>
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
};

export default Doctorsdb;