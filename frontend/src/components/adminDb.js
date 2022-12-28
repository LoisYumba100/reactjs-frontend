import React, {useState, useEffect} from 'react';
import { addDoctor } from '../api/adminApi';
import { getAllDoctors } from '../api/doctorApi';
import '../adminDb.css';



const AdminDb = () => {

  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const fetchDoctors = async () => {
      await getAllDoctors().then((res) => {
        setDoctors(res)
      }).catch((e) => {
        console.log(e)
      })
    }

   fetchDoctors()
  }, [])
 

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
        {
          doctors && doctors.map(({id, doctorName, lastName, username}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{doctorName}</td>
              <td>{lastName}</td>
              <td>{username}</td>
            </tr>
          ))

         }
          
        </tbody>
      </table>
    </div>
  );
};

export default AdminDb;
