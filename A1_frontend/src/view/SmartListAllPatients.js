import React, { Component } from "react";
import entityPatient from "../entity/entityPatient";
import ListAllPatients from "./ListAllPatients";
import PatientsListPresenter from "../presenter/PatientsListPresenter";

const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients
});

export default class SmartListAllPatients extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityPatient.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityPatient.addListener("change", this.listener);
        PatientsListPresenter.onInit();
    }

    componentWillUnmount() {
        entityPatient.removeListener("change", this.listener);
    }

    render() {
        return (
            <ListAllPatients
                onBack={PatientsListPresenter.onBack}
                onDeletePatient={PatientsListPresenter.onDeletePatient}
                onCreatePatient={PatientsListPresenter.onCreatePatient}
                patients={this.state.patients} />
        );
    }
}