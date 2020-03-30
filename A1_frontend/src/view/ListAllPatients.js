import React from "react";

const ListAllPatients = ({ patients, onDeletePatient, onBack }) => (
    <div>
        <h2>Patients</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Birth date</th>
                    <th>Gender</th>
                    <th>Medical record</th>
                    <th>Name</th>
                    <th>CaregiverID</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    patients.map((patient, index) => (
                        <tr key={index}>
                            <td>{patient.address}</td>
                            <td>{patient.birth_date}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.medical_record}</td>
                            <td>{patient.name}</td>
                            <td>{patient.caregiver_id}</td>
                            <td><button onClick = {() => onDeletePatient(index)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
        <button onClick = {onBack}>HomePage</button>
    </div>
);

export default ListAllPatients;