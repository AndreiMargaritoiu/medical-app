  
import { EventEmitter } from "events";

class EntityUser extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{ 
                username:"bea98",
                password:"otto"
            }],
                currentUser: {
                username: "",
                password: ""
             }
        };
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

//singleton
const entityUser = new EntityUser();

export default entityUser;