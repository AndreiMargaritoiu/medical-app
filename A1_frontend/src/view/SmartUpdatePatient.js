import React, { Component } from "react";
import entityPatient from "../entity/entityPatient";
import UpdatePatient from "./UpdatePatient";
import PatientsListPresenter from "../presenter/PatientsListPresenter";

const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients,
    newRecord: modelState.newPatient.medical_record
});

export default class SmartUpdatePatient extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityPatient.addListener("change", this.listener);
        console.log(this.state.patients);
        PatientsListPresenter.onInit();
    }

    componentWillUnmount() {
       entityPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <UpdatePatient
                onUpdatePatient={PatientsListPresenter.onUpdatePatient}
                onEdit={PatientsListPresenter.onEdit}
                onChange={PatientsListPresenter.onChange}
                patients={this.state.patients}/>
        );
    }
}