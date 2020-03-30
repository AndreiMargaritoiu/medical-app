import React from "react";

const UpdateCaregiver = ({ caregivers, newAddress, onEdit, onChange }) => (
    <div>
        <h2>Update Caregiver</h2>
        { 
            caregivers.map((caregiver, index) => (
                <div>
                    <br />
                    <label>Address: </label>
                    <span>{ caregiver.address }</span>
                    <input value={newAddress} onChange={ e => onChange("address", e.target.value)} />
                    <br />
                    <label>Name: </label>
                    <span>{ caregiver.name }</span>
                    <br />
                    <label>BirthDate: </label>
                    <span>{ caregiver.birth_date }</span>
                    <br />
                    <label>Gender: </label>
                    <span>{ caregiver.gender }</span>
                    <br />
                    <button onClick = {() => onEdit(index)}>Update</button>
                </div>
            ))
        }
    </div>
);

export default UpdateCaregiver;