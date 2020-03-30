import React from "react";

const Home = ({ patientsOps, caregiversOps, medicationsOps }) => (
    <div>
        <h2>Cabinet Medical</h2>
        <br />
        <button onClick = {patientsOps}>Patients Ops</button>
        <br />
        <button onClick = {caregiversOps}>Caregivers Ops</button>
        <br />
        <button onClick = {medicationsOps}>Medications Ops</button>
    </div>
);

export default Home;