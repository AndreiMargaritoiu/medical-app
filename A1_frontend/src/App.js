import React from 'react';
import './App.css';

import { HashRouter, Switch, Route} from "react-router-dom";
import SmartLogin from './view/SmartLogin';
import SmartHome from './view/SmartHome';
import SmartChooseOpPatients from './view/SmartChooseOpPatients';
import SmartChooseOpCaregivers from './view/SmartChooseOpCaregivers';
import SmartChooseOpMedications from './view/SmartChooseOpMedications';

import SmartCreatePatient from './view/SmartCreatePatient';
import SmartListAllPatients from './view/SmartListAllPatients';
import SmartUpdatePatient from './view/SmartUpdatePatient';

import SmartCreateCaregiver from './view/SmartCreateCaregiver';
import SmartListAllCaregivers from './view/SmartListAllCaregivers';
import SmartUpdateCaregiver from './view/SmartUpdateCaregiver';

import SmartCreateMedication from './view/SmartCreateMedication';
import SmartListAllMedications from './view/SmartListAllMedications';
import SmartUpdateMedication from './view/SmartUpdateMedication';

const App = () =>(
<div className="App">
        <HashRouter>
          <Switch>
            <Route exact={true} component={SmartLogin} path="/" />
            <Route exact={true} component={SmartHome} path="/home" />
            <Route exact={true} component={SmartChooseOpPatients} path="/choose-op-patients" />
            <Route exact={true} component={SmartChooseOpCaregivers} path="/choose-op-caregivers" />
            <Route exact={true} component={SmartChooseOpMedications} path="/choose-op-medications" />


            <Route exact={true} component={SmartCreatePatient} path="/create-patient" />
            <Route exact={true} component={SmartListAllPatients} path="/list-patients" />
            <Route exact={true} component={SmartUpdatePatient} path="/update-patient" />

            <Route exact={true} component={SmartCreateCaregiver} path="/create-caregiver" />
            <Route exact={true} component={SmartListAllCaregivers} path="/list-caregivers" />
            <Route exact={true} component={SmartUpdateCaregiver} path="/update-caregiver" />
           
            <Route exact={true} component={SmartCreateMedication} path="/create-medication" />
            <Route exact={true} component={SmartListAllMedications} path="/list-medications" />
            <Route exact={true} component={SmartUpdateMedication} path="/update-medication" />
            
          </Switch>
        </HashRouter>     
</div>
);


export default App;
