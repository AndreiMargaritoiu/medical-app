import React, { Component } from "react";
import Home from "./Home";
import HomePresenter from "../presenter/HomePresenter";

export default class SmartHome extends Component {

    render() {
        return (
            <Home
                patientsOps={HomePresenter.pacientsOps}
                caregiversOps={HomePresenter.caregiversOps}
                medicationsOps={HomePresenter.medicationsOps} />
        );
    }
}