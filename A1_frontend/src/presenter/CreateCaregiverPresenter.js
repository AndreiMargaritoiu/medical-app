import entityCaregiver from "../entity/entityCaregiver";

class CreateCaregiverPresenter {
    onCreateCaregiver() {
        entityCaregiver.addCaregiver(entityCaregiver.state.newCaregiver.address,
                                 entityCaregiver.state.newCaregiver.birth_date, 
                                 entityCaregiver.state.newCaregiver.gender, 
                                 entityCaregiver.state.newCaregiver.name );
        entityCaregiver.changeNewCaregiverProperty("address", "");
        entityCaregiver.changeNewCaregiverProperty("birth_date", "");
        entityCaregiver.changeNewCaregiverProperty("gender", "");
        entityCaregiver.changeNewCaregiverProperty("name", "");
        window.location.assign("#/list-caregivers");
    }

    onChange(property, value){
        entityCaregiver.changeNewCaregiverProperty(property, value);
    }
}

const createCaregiverPresenter = new CreateCaregiverPresenter();

export default createCaregiverPresenter;