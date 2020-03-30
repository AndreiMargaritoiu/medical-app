import React from "react";

const ChooseOpMedications = ({onAddMedication, onListMedications, onUpdateMedication, onBack }) => (
    <div>
        <h2>Medication Operations</h2>
        <br />
        <button onClick = {onAddMedication}>Add Medication</button>
        <br />
        <button onClick = {onListMedications}>List All Medications</button>
        <br />
        <button onClick = {onUpdateMedication}>Update Medications</button>
        <br />
        <button onClick = {onBack}>HomePage</button>
    </div>
);

export default ChooseOpMedications;