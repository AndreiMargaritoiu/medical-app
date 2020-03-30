import entityPatient from "../entity/entityPatient";

class CreatePatientPresenter {
    onCreatePatient() {
        entityPatient.addPatient(entityPatient.state.newPatient.address,
                                 entityPatient.state.newPatient.birth_date, 
                                 entityPatient.state.newPatient.gender, 
                                 entityPatient.state.newPatient.medical_record,
                                 entityPatient.state.newPatient.name,
                                 entityPatient.state.newPatient.caregiver_id );
        entityPatient.changeNewPatientProperty("address", "");
        entityPatient.changeNewPatientProperty("birth_date", "");
        entityPatient.changeNewPatientProperty("gender", "");
        entityPatient.changeNewPatientProperty("medical_record", "");
        entityPatient.changeNewPatientProperty("name", "");
        entityPatient.changeNewPatientProperty("caregiver_id");
        window.location.assign("#/list-patients");
    }

    onChange(property, value){
        entityPatient.changeNewPatientProperty(property, value);
    }
}

const createPatientPresenter = new CreatePatientPresenter();

export default createPatientPresenter;