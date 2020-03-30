
class HomePresenter {
    pacientsOps(){
        window.location.assign("#/choose-op-patients");
    }
    caregiversOps(){
        window.location.assign("#/choose-op-caregivers");
    }
    medicationsOps(){
        window.location.assign("#/choose-op-medications");
    }
 }
 
 const homePresenter = new HomePresenter();
 
 export default homePresenter;