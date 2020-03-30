import entityMedication from "../entity/entityMedication";

class CreateMedicationPresenter {
    onCreateMedication() {
        entityMedication.addMedication(entityMedication.state.newMedication.dosage,
                                 entityMedication.state.newMedication.name,
                                 entityMedication.state.newMedication.side_effects
                                 );
        entityMedication.changeNewMedicationProperty("dosage", "");
        entityMedication.changeNewMedicationProperty("name", "");
        entityMedication.changeNewMedicationProperty("side_effects", "");
        window.location.assign("#/list-medications");
    }

    onChange(property, value){
        entityMedication.changeNewMedicationProperty(property, value);
    }
}

const createMedicationPresenter = new CreateMedicationPresenter();

export default createMedicationPresenter;