import entityDoctor from "../entity/entityDoctor";

class UsersLoginPresenter {
    onChange(property, value){
        entityDoctor.changeNewDoctorProperty(property, value);
    }
    
    onLogin(){
        for(let index = 0; index < entityDoctor.state.doctors.length; index++){
            if(entityDoctor.state.doctors[index].usernamed === entityDoctor.state.currentDoctor.usernamed){
                window.location.assign("#/home");
            }
        }
    }
 }
 
 const usersLoginPresenter = new UsersLoginPresenter();
 
 export default usersLoginPresenter;