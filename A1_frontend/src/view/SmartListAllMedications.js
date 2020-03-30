import React, { Component } from "react";
import entityMedication from "../entity/entityMedication";
import ListAllMedications from "./ListAllMedications";
import MedicationsListPresenter from "../presenter/MedicationsListPresenter";

const mapModelStateToComponentState = modelState => ({
    medications: modelState.medications
});

export default class SmartListAllMedications extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityMedication.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityMedication.addListener("change", this.listener);
        MedicationsListPresenter.onInit();
    }

    componentWillUnmount() {
        entityMedication.removeListener("change", this.listener);
    }

    render() {
        return (
            <ListAllMedications
                onBack={MedicationsListPresenter.onBack}
                onDeleteMedication={MedicationsListPresenter.onDeleteMedication}
                onCreateMedication={MedicationsListPresenter.onCreateMedication}
                medications={this.state.medications} />
        );
    }
}