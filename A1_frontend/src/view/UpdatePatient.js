import React from "react";

const UpdatePatient = ({ patients, newRecord, onEdit, onChange }) => (
    <div>
        <h2>Update Patient</h2>
        { 
            patients.map((patient, index) => (
                <div>
                    <br />
                    <label>Address: </label>
                    <span>{ patient.address }</span>
                    <br />
                    <label>Name: </label>
                    <span>{ patient.name }</span>
                    <br />
                    <label>BirthDate: </label>
                    <span>{ patient.birth_date }</span>
                    <br />
                    <label>Gender: </label>
                    <span>{ patient.gender }</span>
                    <br />
                    <label>CaregiverId: </label>
                    <span>{ patient.caregiver_id }</span>
                    <br />
                    <label>Medical_record: </label>
                    <span>{ patient.medical_record }</span>
                    <input value={newRecord} onChange={ e => onChange("medical_record", e.target.value)} />
                    <br />
                    <button onClick = {() => onEdit(index)}>Update</button>
                </div>
            ))
        }
    </div>
);

export default UpdatePatient;