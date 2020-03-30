import React, { Component } from "react";
import entityPatient from "../entity/entityPatient";
import CreatePatient from "./CreatePatient";
import CreatePatientPresenter from "../presenter/CreatePatientPresenter";

const mapModelStateToComponentState = modelState => ({
    address: modelState.newPatient.address,
    birth_date: modelState.newPatient.birth_date,
    gender: modelState.newPatient.gender,
    medical_record: modelState.newPatient.medical_record,
    name: modelState.newPatient.name,
    caregiver_id: modelState.newPatient.caregiver_id
});

export default class SmartCreatePatient extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityPatient.addListener("change", this.listener);
    }

    componentWillUnmount() {
       entityPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreatePatient
                onCreatePatient={CreatePatientPresenter.onCreatePatient}
                onChange={CreatePatientPresenter.onChange}
                address={this.state.address}
                birth_date={this.state.birth_date} 
                gender={this.state.gender}
                medical_record={this.state.medical_record}
                name={this.state.name}
                caregiver_id={this.state.caregiver_id}/>
        );
    }
}