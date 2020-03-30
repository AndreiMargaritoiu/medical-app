import React, { Component } from "react";
import entityCaregiver from "../entity/entityCaregiver";
import UpdateCaregiver from "./UpdateCaregiver";
import CaregiversListPresenter from "../presenter/CaregiversListPresenter";

const mapModelStateToComponentState = modelState => ({
    caregivers: modelState.caregivers,
    newAddress: modelState.newCaregiver.address
});

export default class SmartDeleteCaregiver extends Component {
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
            <UpdateCaregiver
                onUpdateCaregiver={CaregiversListPresenter.onUpdateCaregiver}
                onEdit={CaregiversListPresenter.onEdit}
                onChange={CaregiversListPresenter.onChange}
                caregivers={this.state.caregivers}/>
        );
    }
}