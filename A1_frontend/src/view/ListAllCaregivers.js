import React from "react";

const ListAllCaregivers = ({ caregivers, onDeleteCaregiver, onBack }) => (
    <div>
        <h2>Caregivers</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Birth date</th>
                    <th>Gender</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    caregivers.map((caregiver, index) => (
                        <tr key={index}>
                            <td>{caregiver.address}</td>
                            <td>{caregiver.birth_date}</td>
                            <td>{caregiver.gender}</td>
                            <td>{caregiver.name}</td>
                            <td><button onClick = {() => onDeleteCaregiver(index)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
        <button onClick = {onBack}>HomePage</button>  
    </div>
);

export default ListAllCaregivers;