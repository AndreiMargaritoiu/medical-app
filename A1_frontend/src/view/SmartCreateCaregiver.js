import React, { Component } from "react";
import entityCaregiver from "../entity/entityCaregiver";
import CreateCaregiver from "./CreateCaregiver";
import CreateCaregiverPresenter from "../presenter/CreateCaregiverPresenter";

const mapModelStateToComponentState = modelState => ({
    address: modelState.newCaregiver.address,
    birth_date: modelState.newCaregiver.birth_date,
    gender: modelState.newCaregiver.gender,
    name: modelState.newCaregiver.name
});

export default class SmartCreateCaregiver extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityCaregiver.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityCaregiver.addListener("change", this.listener);
    }

    componentWillUnmount() {
       entityCaregiver.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateCaregiver
                onCreateCaregiver={CreateCaregiverPresenter.onCreateCaregiver}
                onChange={CreateCaregiverPresenter.onChange}
                address={this.state.address}
                birth_date={this.state.birth_date} 
                gender={this.state.gender}
                name={this.state.name}/>
        );
    }
}