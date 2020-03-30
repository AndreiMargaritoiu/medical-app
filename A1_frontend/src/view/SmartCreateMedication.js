import React, { Component } from "react";
import entityMedication from "../entity/entityMedication";
import CreateMedication from "./CreateMedication";
import CreateMedicationPresenter from "../presenter/CreateMedicationPresenter";

const mapModelStateToComponentState = modelState => ({
    dosage: modelState.newMedication.dosage,
    name: modelState.newMedication.name,
    side_effects: modelState.newMedication.side_effects
});

export default class SmartCreateMedication extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityMedication.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityMedication.addListener("change", this.listener);
    }

    componentWillUnmount() {
       entityMedication.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateMedication
                onCreateMedication={CreateMedicationPresenter.onCreateMedication}
                onChange={CreateMedicationPresenter.onChange}
                dosage={this.state.dosage}
                name={this.state.name}
                side_effects={this.state.side_effects}/>
        );
    }
}