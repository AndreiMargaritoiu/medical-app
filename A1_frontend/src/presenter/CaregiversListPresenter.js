import entityCaregiver from "../entity/entityCaregiver";

class CaregiversListPresenter {
    onCreateCaregiver() {
        entityCaregiver.addCaregiver(entityCaregiver.state.newCaregiver.address,
                                 entityCaregiver.state.newCaregiver.birth_date,
                                 entityCaregiver.state.newCaregiver.gender,
                                 entityCaregiver.state.newCaregiver.name);
    }

    onAddCaregiver(){
        window.location.assign("#/create-caregiver");
    }

    onInit(){
        entityCaregiver.loadCaregivers();
    }
     
    onListCaregivers() {
        window.location.assign("#/list-caregivers");
    }

    onDeleteCaregiverId(){
        window.location.assign("#/list-caregivers");
    }
     
    onDeleteCaregiver(index) {
        entityCaregiver.removeCaregiver(index).then(() => {
           window.location.assign("#/list-caregivers");
        });
    }

    onUpdateCaregiver(){
        window.location.assign("#/update-caregiver");
    }

    onEdit(index) {
        entityCaregiver.editCaregiver(entityCaregiver.state.newCaregiver.address, index).then(() => {
            window.location.assign("#/list-caregivers");
         });
    }
  
    changeToSearch(property, value){
        entityCaregiver.changeToSearch(property, value);
    }

    onChange(property, value){
        entityCaregiver.changeNewCaregiverProperty(property, value);
    }
     
    onBack(){
        window.location.assign("#/home");
    }
  }

  const caregiversListPresenter = new CaregiversListPresenter();
 
  export default caregiversListPresenter;