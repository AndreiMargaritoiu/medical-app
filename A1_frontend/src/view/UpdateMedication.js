import React from "react";

const UpdateMedication = ({ medications, newDosage, onEdit, onChange }) => (
    <div>
        <h2>Update Medication</h2>
        { 
            medications.map((medication, index) => (
                <div>
                    <br />
                    <label>Dosage: </label>
                    <span>{ medication.dosage }</span>
                    <input value={newDosage} onChange={ e => onChange("dosage", e.target.value)} />
                    <br />
                    <label>Name: </label>
                    <span>{ medication.name }</span>
                    <br />
                    <label>Side Effects: </label>
                    <span>{ medication.side_effects }</span>
                    <br />
                    <button onClick = {() => onEdit(index)}>Update</button>
                </div>
            ))
        }    
    </div>
);

export default UpdateMedication;