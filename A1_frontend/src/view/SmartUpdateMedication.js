import React, { Component } from "react";
import entityMedication from "../entity/entityMedication";
import UpdateMedication from "./UpdateMedication";
import MedicationsListPresenter from "../presenter/MedicationsListPresenter";

const mapModelStateToComponentState = modelState => ({
    medications: modelState.medications,
    newDosage: modelState.newMedication.dosage
});

export default class SmartDeleteMedication extends Component {
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
            <UpdateMedication
                onUpdateMedication={MedicationsListPresenter.onUpdateMedication}
                onEdit={MedicationsListPresenter.onEdit}
                onChange={MedicationsListPresenter.onChange}
                medications={this.state.medications}/>
        );
    }
}