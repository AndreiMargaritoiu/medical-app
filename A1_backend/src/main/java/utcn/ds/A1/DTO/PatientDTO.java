package utcn.ds.A1.DTO;

import lombok.Data;
import utcn.ds.A1.Entity.Patient;

import java.sql.Timestamp;

@Data
public class PatientDTO {
    private Integer id;
    private String address;
    private String birth_date;
    private int caregiver_id;
    private String gender;
    private String medical_record;
    private String name;


    public static PatientDTO ofEntity(Patient patient) {
        PatientDTO patientDTO = new PatientDTO();
        patientDTO.setId(patient.getId());
        patientDTO.setAddress(patient.getAddress());
        patientDTO.setBirth_date(patient.getBirth_date());
        patientDTO.setCaregiver_id(patient.getCaregiver().getId());
        patientDTO.setGender(patient.getGender());
        patientDTO.setMedical_record(patient.getMedical_record());
        patientDTO.setName(patient.getName());
        return patientDTO;
    }
}
