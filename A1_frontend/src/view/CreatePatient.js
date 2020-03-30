import React from "react";

const CreatePatient = ({ address, birth_date, gender, medical_record, name, caregiver_id, onCreatePatient, onChange }) => (
    <div>
        <h2>Add Patient</h2>
        <div>
            <label>Address: </label>
            <input value={address} onChange={ e => onChange("address", e.target.value)} />
            <br />
            <label>Birth Date: </label>
            <input value={birth_date} onChange={ e => onChange("birth_date", e.target.value)} />
            <br />
            <label>Gender: </label>
            <input value={gender} onChange={ e => onChange("gender", e.target.value)} />
            <br />
            <label>Medical Record: </label>
            <input value={medical_record} onChange={ e => onChange("medical_record", e.target.value)} />
            <br />
            <label>Name: </label>
            <input value={name} onChange={ e => onChange("name", e.target.value)} />
            <br />
            <label>CaregiverId: </label>
            <input value={caregiver_id} onChange={ e => onChange("caregiver_id", e.target.value)} />
            <br />
            <button onClick = {onCreatePatient}>Create!</button>
        </div>
    </div>
);

export default CreatePatient;