
import React, { useState } from 'react'
import '../adminDb.css'
import data from '../mock-data.json'


const AdminDb = () => {
  const [contacts, setContacts] = useState(data);

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
          {contacts.map((contacts)=>(<tr>
            <td>{contacts.id}</td>
            <td>{contacts.FirstName}</td>
            <td>{contacts.LastName}</td>
            <td>{contacts.Specialization}</td>
          </tr>))}
          
        </tbody>
      </table>
    </div>
  );
};

export default AdminDb;
