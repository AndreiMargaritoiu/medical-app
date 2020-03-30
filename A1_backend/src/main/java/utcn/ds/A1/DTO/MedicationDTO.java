package utcn.ds.A1.DTO;

import lombok.Data;
import utcn.ds.A1.Entity.Medication;


@Data
public class MedicationDTO {
    private Integer id;
    private double dosage;
    private String name;
    private String side_effects;

    public static MedicationDTO ofEntity(Medication medication) {
        MedicationDTO medicationDTO = new MedicationDTO();
        medicationDTO.setId(medication.getId());
        medicationDTO.setDosage(medication.getDosage());
        medicationDTO.setName(medication.getName());
        medicationDTO.setSide_effects(medication.getSide_effects());
        return medicationDTO;
    }

}

