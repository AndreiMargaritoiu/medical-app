import { EventEmitter } from "events";
import RestUser from "../rest/RestUser";

const client = new RestUser("beatrice", "otto");

class EntityCaregiver extends EventEmitter {
    constructor() {
        super();
        this.state = {
            caregivers: [{
                address: "Horea",
                birth_date: "20/03/1998",
                gender: "female",
                name: "Bea"
            }],
            newCaregiver: {
                address: "",
                birth_date: "",
                gender: "",
                name: ""

            },
            selectedCaregiverIndex: -1,
            searchCaregivers:{},
            toSearch:""
        };
    }

    changeSelectedCaregiversIndex(index) {
        this.state = {
            ...this.state,
            selectedCaregiverIndex: index
        };
        this.emit("change", this.state);
    }

    loadCaregivers(){
        return client.loadAllCaregivers().then(caregivers => {
            this.state = { 
                ...this.state, 
                caregivers: caregivers
            };
            this.emit("change", this.state);
        })
    }

    addCaregiver(address, birth_date, gender, name){
        return client.createCaregiver(address, birth_date, gender, name).then(caregiver=>{
            this.state = {
                ...this.state,
                caregivers: this.state.caregivers.concat([caregiver])
            };
            console.log(caregiver)
            this.emit("change", this.state);
    });
    }

    getCaregiverId(index){
        return this.state.caregivers[index].id;
    }

    removeCaregiver(index){
        var id = this.getCaregiverId(index);
        return client.deleteCaregiver(id);
    }

    editCaregiver(newAddress, index){
        var id = this.getCaregiverId(index);

        return client.editCaregiver(newAddress, id).then(
            this.setState = {
                ...this.state[index],
                address: newAddress
            }
        );
    }
    
    changeNewCaregiverProperty(property, value) {
        this.state = {
            ...this.state,
            newCaregiver: {
                ...this.state.newCaregiver,
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

    newCaregiverList(caregivers){
        this.state = {
            ...this.state,
            caregivers:caregivers
        };
        this.emit("change", this.state);

    }

}

//singleton
const entityCaregiver = new EntityCaregiver();

export default entityCaregiver;