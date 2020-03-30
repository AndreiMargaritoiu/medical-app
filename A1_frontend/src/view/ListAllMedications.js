import React from "react";

const ListAllMedications = ({ medications, onDeleteMedication, onBack }) => (
    <div>
        <h2>Medications</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Dosage</th>
                    <th>Name</th>
                    <th>Side effects</th>
                </tr>
            </thead>
            <tbody>
                {
                    medications.map((medication, index) => (
                        <tr key={index}>
                            <td>{medication.dosage}</td>
                            <td>{medication.name}</td>
                            <td>{medication.side_effects}</td> 
                            <td><button onClick = {() => onDeleteMedication(index)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
        <button onClick = {onBack}>HomePage</button>
    </div>
);

export default ListAllMedications;