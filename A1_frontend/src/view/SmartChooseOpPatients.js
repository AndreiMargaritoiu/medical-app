import React, { Component } from "react";
import ChooseOpPatients from "./ChooseOpPatients";
import PatientsListPresenter from "../presenter/PatientsListPresenter";
import entityPatient from "../entity/entityPatient";

const mapModelStateToComponentState = modelState => ({
    patients: modelState.patients
});

export default class SmartChooseOpPatients extends Component {
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
            <ChooseOpPatients
                onBack={PatientsListPresenter.onBack}
                onAddPatient={PatientsListPresenter.onAddPatient}
                onListPatients={PatientsListPresenter.onListPatients}
                onDeletePatientId={PatientsListPresenter.onDeletePatientId}
                onUpdatePatient={PatientsListPresenter.onUpdatePatient}
                patients={this.state.patients} />
        );
    }
}