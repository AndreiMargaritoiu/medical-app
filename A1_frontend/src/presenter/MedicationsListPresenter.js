import entityMedication from "../entity/entityMedication";

class MedicationsListPresenter {
    onCreateMedication() {
        entityMedication.addMedication(entityMedication.state.newMedication.dosage,
                                 entityMedication.state.newMedication.name,
                                 entityMedication.state.newMedication.side_effects);
    }

    onAddMedication(){
        window.location.assign("#/create-medication");
    }
  
    onInit(){
        entityMedication.loadMedications();
    }
     
    onListMedications() {
        window.location.assign("#/list-medications");
    }

    onDeleteMedicationId(){
        window.location.assign("#/list-medications");
    }
     
    onDeleteMedication(index) {
        entityMedication.removeMedication(index).then(() => {
           window.location.assign("#/list-medications");
        });
    }

    onUpdateMedication(){
        window.location.assign("#/update-medication");
    }

    onEdit(index) {
        entityMedication.editMedication(entityMedication.state.newMedication.dosage, index).then(() => {
            window.location.assign("#/list-medications");
         });
    }

    onChange(property, value){
        entityMedication.changeNewMedicationProperty(property, value);
    }
  
    onBack(){
        window.location.assign("#/home");
    }
    
    changeToSearch(property, value){
        entityMedication.changeToSearch(property, value);
    }
     
  }
 
 const medicationsListPresenter = new MedicationsListPresenter();
 
 export default medicationsListPresenter;