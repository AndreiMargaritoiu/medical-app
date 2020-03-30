import React, { Component } from "react";
import entityCaregiver from "../entity/entityCaregiver";
import ListAllCaregivers from "./ListAllCaregivers";
import CaregiversListPresenter from "../presenter/CaregiversListPresenter";

const mapModelStateToComponentState = modelState => ({
    caregivers: modelState.caregivers
});

export default class SmartListAllCaregivers extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityCaregiver.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityCaregiver.addListener("change", this.listener);
        CaregiversListPresenter.onInit();
    }

    componentWillUnmount() {
        entityCaregiver.removeListener("change", this.listener);
    }

    render() {
        return (
            <ListAllCaregivers
                onBack={CaregiversListPresenter.onBack}
                onDeleteCaregiver={CaregiversListPresenter.onDeleteCaregiver}
                onCreateCaregiver={CaregiversListPresenter.onCreateCaregiver}
                caregivers={this.state.caregivers} />
        );
    }
}