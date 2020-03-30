import React, { Component } from "react";
import entityDoctor from "../entity/entityDoctor";
import Login from "./Login";
import UsersLoginPresenter from "../presenter/UsersLoginPresenter";

const mapModelStateToComponentState = modelState => ({
    usernamed: modelState.currentDoctor.usernamed,
    passwordd: modelState.currentDoctor.passwordd
});

export default class SmartLogin extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(entityDoctor.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        entityDoctor.addListener("change", this.listener);
    }

    componentWillUnmount() {
        entityDoctor.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login
                onLogin={UsersLoginPresenter.onLogin}
                onChange={UsersLoginPresenter.onChange}
                usernamed={this.state.usernamed} 
                passwordd={this.state.passwordd}/>
        );
    }
}