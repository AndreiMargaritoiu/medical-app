const BASE_URL = "http://localhost:8080";

export default class RestUser {
    constructor(usernamed, passwordd) {
        this.authorization = "Basic " + btoa(usernamed + ":" + passwordd);
    }

    loadAllPatients() {
        return fetch(BASE_URL + "/patients", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
    createPatient(address, birth_date, gender, medical_record, name, caregiver_id) {
        return fetch(BASE_URL + "/patients", {
            method: "POST",
            body: JSON.stringify({
                id:null,
                address: address,
                birth_date: birth_date,
                gender: gender,
                medical_record: medical_record,
                name: name,
                caregiver_id: caregiver_id
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
    deletePatient(id) {
        return fetch(BASE_URL + "/patients/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .catch((error) => {
            throw error;
        });;;
    }
    editPatient(newRecord, id) {
        return fetch(BASE_URL + "/patients/" + id, {
            method: "PUT",
            body: JSON.stringify({
                id:id,
                address: null,
                birth_date: null,
                gender: null,
                medical_record: newRecord,
                name: null,
                caregiver_id: null
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    loadAllCaregivers() {
        return fetch(BASE_URL + "/caregivers", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
    createCaregiver(address, birth_date, gender, name) {
        return fetch(BASE_URL + "/caregivers", {
            method: "POST",
            body: JSON.stringify({
                id:null,
                address: address,
                birth_date: birth_date,
                gender: gender,
                name: name
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
    deleteCaregiver(id) {
        return fetch(BASE_URL + "/caregivers/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization
            }
        }).then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .catch((error) => {
            throw error;
        });;;
    }
    editCaregiver(newAddress, id) {
        return fetch(BASE_URL + "/caregivers/" + id, {
            method: "PUT",
            body: JSON.stringify({
                id:id,
                address: newAddress,
                birth_date: null,
                gender: null,
                name: null
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


    loadAllMedications() {
        return fetch(BASE_URL + "/medications", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => response.json());
    }
    createMedication(dosage, name, side_effects) {
        return fetch(BASE_URL + "/medications", {
            method: "POST",
            body: JSON.stringify({
                id:null,
                dosage: dosage,
                name: name,
                side_effects: side_effects
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }
    deleteMedication(id) {
        return fetch(BASE_URL + "/medications/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": this.authorization
            }
        }).then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .catch((error) => {
            throw error;
        });;
    }
    editMedication(newDosage, id) {
        return fetch(BASE_URL + "/medications/" + id, {
            method: "PUT",
            body: JSON.stringify({
                id:id,
                dosage: newDosage,
                name: null,
                side_effects: null
            }),
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }


}