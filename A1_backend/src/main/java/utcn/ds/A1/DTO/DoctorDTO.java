package utcn.ds.A1.DTO;

import lombok.Data;
import utcn.ds.A1.Entity.Doctor;
import utcn.ds.A1.Entity.Patient;

import java.util.List;

@Data
public class DoctorDTO {

    private Integer id;
    private String name;
    private String password;
    //private String gender;
    //private List<Patient> doctor_patients;

    public static DoctorDTO ofEntity(Doctor doctor) {
        DoctorDTO doctorDTO = new DoctorDTO();
        doctorDTO.setId(doctor.getId());
        doctorDTO.setName(doctor.getName());
        doctorDTO.setPassword(doctor.getPassword());
        //doctorDTO.setGender(doctor.getGender());
        //doctorDTO.setPatients(doctor.getPatients());
        return doctorDTO;
    }

}
