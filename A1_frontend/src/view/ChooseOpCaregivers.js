import React from "react";

const ChooseOpCaregivers = ({ onAddCaregiver, onListCaregivers, onUpdateCaregiver, onBack }) => (
    <div>
        <h2>Caregiver Operations</h2>
        <br />
        <button onClick = {onAddCaregiver}>Add Caregiver</button>
        <br />
        <button onClick = {onListCaregivers}>List All Caregivers</button>
        <br />
        <button onClick = {onUpdateCaregiver}>Update Caregivers</button>
        <br />
        <button onClick = {onBack}>HomePage</button>
    </div>
);

export default ChooseOpCaregivers;