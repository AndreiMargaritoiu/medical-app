import { EventEmitter } from "events";
import RestUser from "../rest/RestUser";

const client = new RestUser("beatrice", "otto");

class EntityMedication extends EventEmitter {
    constructor() {
        super();
        this.state = {
            medications: [{
                dosage: 125.3,
                name: "Ibuprofen",
                side_effects: "dizziness"
            }],
            newMedication: {
                dosage: "",
                name: "",
                side_effects: ""
            },
            selectedMedicationIndex: -1,
            searchMedications:{},
            toSearch:""
        };
    }

    changeSelectedMedicationsIndex(index) {
        this.state = {
            ...this.state,
            selectedMedicationIndex: index
        };
        this.emit("change", this.state);
    }

    loadMedications(){
        return client.loadAllMedications().then(medications => {
            this.state = { 
                ...this.state, 
                medications: medications
            };
            this.emit("change", this.state);
        })
    }

    addMedication(dosage, name, side_effects){
        return client.createMedication(dosage, name, side_effects).then(medication=>{
            this.state = {
                ...this.state,
                medications: this.state.medications.concat([medication])
            };
            console.log(medication)
            this.emit("change", this.state);
    });
    }

    getMedicationId(index){
        return this.state.medications[index].id;
    }

    removeMedication(index){
        var id = this.getMedicationId(index);
        return client.deleteMedication(id);
    }

    editMedication(newDosage, index){
        var id = this.getMedicationId(index);

        return client.editMedication(newDosage, id).then(
            this.setState = {
                ...this.state[index],
                dosage: newDosage
            }
        );
    }

    changeNewMedicationProperty(property, value) {
        this.state = {
            ...this.state,
            newMedication: {
                ...this.state.newMedication,
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

    newMedicationList(medications){
        this.state = {
            ...this.state,
            medications:medications
        };
        this.emit("change", this.state);

    }

}

//singleton
const entityMedication = new EntityMedication();

export default entityMedication;