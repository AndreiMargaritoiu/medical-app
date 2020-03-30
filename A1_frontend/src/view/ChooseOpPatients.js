import React from "react";

const ChooseOpPatients = ({ onAddPatient, onListPatients, onUpdatePatient, onBack }) => (
    <div>
        <h2>Patients Operations</h2>
        <br />
        <button onClick = {onAddPatient}>Add Patient</button>
        <br />
        <button onClick = {onListPatients}>List All Patients</button>
        <br />
        <button onClick = {onUpdatePatient}>Update Patients</button>
        <br />
        <button onClick = {onBack}>HomePage</button>
    </div>
);

export default ChooseOpPatients;