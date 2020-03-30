import { EventEmitter } from "events";
import RestUser from "../rest/RestUser";

const client = new RestUser("beatrice", "otto");

class EntityPatient extends EventEmitter {
    constructor() {
        super();
        this.state = {
            patients: [{
                address: "Horea",
                birth_date: "20/03/1998",
                gender: "female",
                medical_record: "allergies",
                name: "Bea",
                caregiver_id: "1"
            }],
            newPatient: {
                address: "",
                birth_date: "",
                gender: "",
                medical_record: "",
                name: "",
                caregiver_id: ""

            },
            selectedPatientIndex: -1,
            searchPatients:{},
            toSearch:""
        };
    }

    changeSelectedPatientsIndex(index) {
        this.state = {
            ...this.state,
            selectedPatientIndex: index
        };
        this.emit("change", this.state);
    }

    loadPatients(){
        return client.loadAllPatients().then(patients => {
            this.state = { 
                ...this.state, 
                patients: patients
            };
            this.emit("change", this.state);
        })
    }

    addPatient(address, birth_date, gender, medical_record, name, caregiver_id){
        return client.createPatient(address, birth_date, gender, medical_record, name, caregiver_id).then(patient=>{
            this.state = {
                ...this.state,
                patients: this.state.patients.concat([patient])
            };
            console.log(patient)
            this.emit("change", this.state);
    });
    }

    getPatientId(index){
        return this.state.patients[index].id;
    }

    getPatientRecord(index){
        return this.state.patients[index].medical_record;
    }

    removePatient(index){
        var id = this.getPatientId(index);
        return client.deletePatient(id);
    }

    //daca exista id-ul, suprascrii pacientul
    editPatient(newRecord, index){
        var id = this.getPatientId(index);

        return client.editPatient(newRecord, id).then(patient=>{
            this.setState = {
                ...this.state[index],
                medical_record: newRecord
            }
    });
    } 
    
    changeNewPatientProperty(property, value) {
        this.state = {
            ...this.state,
            newPatient: {
                ...this.state.newPatient,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeToSearch(property, value) {
        this.state = {
            ...this.state,
           [property]:value
        };
        this.emit("change", this.state);
    }

    newPatientList(patients){
        this.state = {
            ...this.state,
            patients:patients
        };
        this.emit("change", this.state);

    }

}

//singleton
const entityPatient = new EntityPatient();

export default entityPatient;