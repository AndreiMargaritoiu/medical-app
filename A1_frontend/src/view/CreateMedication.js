import React from "react";

const CreateMedication = ({ dosage, name, side_effects, onCreateMedication, onChange }) => (
    <div>
        <h2>Add Medication</h2>
        <div>
            
            <label>Dosage: </label>
            <input value={dosage} onChange={ e => onChange("dosage", e.target.value)} />
            <br />
            <label>Name: </label>
            <input value={name} onChange={ e => onChange("name", e.target.value)} />
            <br />
            <label>Side effects: </label>
            <input value={side_effects} onChange={ e => onChange("side_effects", e.target.value)} />
            <br />
            <button onClick = {onCreateMedication}>Create!</button>
        </div>
    </div>
);

export default CreateMedication;