import entityPatient from "../entity/entityPatient";

class PatientsListPresenter {
    onCreatePatient() {
        entityPatient.addPatient(entityPatient.state.newPatient.address,
                                 entityPatient.state.newPatient.birth_date,
                                 entityPatient.state.newPatient.gender,
                                 entityPatient.state.newPatient.medical_record,
                                 entityPatient.state.newPatient.name,
                                 entityPatient.state.newPatient.caregiver_id);
    }

    onAddPatient(){
        window.location.assign("#/create-patient");
    }
  
    onInit(){
        entityPatient.loadPatients();
    }
     
    onListPatients() {
        window.location.assign("#/list-patients");
    }

    onDeletePatientId(){
        window.location.assign("#/list-patients");
    }
     
    onDeletePatient(index) {
        entityPatient.removePatient(index).then(() => {
           window.location.assign("#/list-patients");
        });
    }

    onUpdatePatient(){
        window.location.assign("#/update-patient/");
    }

    onEdit(index) {
        entityPatient.editPatient(entityPatient.state.newPatient.medical_record, index).then(() => {
            window.location.assign("#/list-patients");
         });
    }
  
    onChange(property, value){
        entityPatient.changeNewPatientProperty(property, value);
    }

    onBack(){
        window.location.assign("#/home");
    }

    changeToSearch(property, value){
        entityPatient.changeToSearch(property, value);
    }
     
  }
 
 const patientsListPresenter = new PatientsListPresenter();
 
 export default patientsListPresenter;