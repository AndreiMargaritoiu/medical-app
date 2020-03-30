import React from "react";

const CreateCaregiver = ({ address, birth_date, gender, name, onCreateCaregiver, onChange }) => (
    <div>
        <h2>Add Caregiver</h2>
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
            <label>Name: </label>
            <input value={name} onChange={ e => onChange("name", e.target.value)} />
            <br />
            <button onClick = {onCreateCaregiver}>Create!</button>
        </div>
    </div>
);

export default CreateCaregiver;