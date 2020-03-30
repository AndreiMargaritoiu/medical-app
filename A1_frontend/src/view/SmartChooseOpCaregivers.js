import React, { Component } from "react";
import ChooseOpCaregivers from "./ChooseOpCaregivers";
import CaregiversListPresenter from "../presenter/CaregiversListPresenter";
import entityCaregiver from "../entity/entityCaregiver";

const mapModelStateToComponentState = modelState => ({
    caregivers: modelState.caregivers
});

export default class SmartChooseOpCaregivers extends Component {
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
            <ChooseOpCaregivers
                onBack={CaregiversListPresenter.onBack}
                onAddCaregiver={CaregiversListPresenter.onAddCaregiver}
                onListCaregivers={CaregiversListPresenter.onListCaregivers}
                onDeleteCaregiverId={CaregiversListPresenter.onDeleteCaregiverId}
                onUpdateCaregiver={CaregiversListPresenter.onUpdateCaregiver}
                caregivers={this.state.caregivers} />
        );
    }
}