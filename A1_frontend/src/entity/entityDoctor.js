import { EventEmitter } from "events";

class EntityDoctor extends EventEmitter {
    constructor() {
        super();
        this.state = {
            doctors: [{ 
                usernamed:"beatrice",
                passwordd:"otto"
            }],
                currentDoctor: {
                usernamed: "",
                passwordd: ""
             }
        };
    }

    changeNewDoctorProperty(property, value) {
        this.state = {
            ...this.state,
            currentDoctor: {
                ...this.state.currentDoctor,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

//singleton
const entityDoctor = new EntityDoctor();

export default entityDoctor;