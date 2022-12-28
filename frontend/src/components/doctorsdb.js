import React, { useState, useEffect } from "react";
import axios from "axios";
import "../adminDb.css";

const Doctorsdb = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      await axios
        .get("http://localhost:8080/api/doctor/get-appointments")
        .then((res) => {
          setAppointments(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Patient</th>
            <th>Appointment Time</th>
            <th>approval</th>
          </tr>
        </thead>
        <tbody>
          {appointments &&
            appointments.map(
              ({ appointmentTime, approval, doctor_id, patient_id }) => (
                <tr key={doctor_id}>
                  <td>{doctor_id}</td>
                  <td>{patient_id}</td>
                  <td>{appointmentTime}</td>
                  <td>{approval}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </div>
  );
};

export default Doctorsdb;
