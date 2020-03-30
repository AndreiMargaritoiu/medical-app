import React, { Component } from "react";
import ChooseOpMedication from "./ChooseOpMedications";
import MedicationsListPresenter from "../presenter/MedicationsListPresenter";
import entityMedication from "../entity/entityMedication";

const mapModelStateToComponentState = modelState => ({
    medications: modelState.medications
});

export default class SmartChooseOpMedications extends Component {
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
            <ChooseOpMedication
                onBack={MedicationsListPresenter.onBack}
                onAddMedication={MedicationsListPresenter.onAddMedication}
                onListMedications={MedicationsListPresenter.onListMedications}
                onDeleteMedicationId={MedicationsListPresenter.onDeleteMedicationId}
                onUpdateMedication={MedicationsListPresenter.onUpdateMedication}
                medications={this.state.medications} />
        );
    }
}