package utcn.ds.A1.DTO;

import lombok.Data;
import org.springframework.util.CollectionUtils;
import utcn.ds.A1.Entity.Caregiver;
import utcn.ds.A1.Entity.Patient;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Data
public class CaregiverDTO {
    private Integer id;
    private String address;
    private String birth_date;
    private String gender;
    private String name;
    private List<Integer> patients;

    public static CaregiverDTO ofEntity(Caregiver caregiver) {
        CaregiverDTO caregiverDTO = new CaregiverDTO();
        caregiverDTO.setId(caregiver.getId());
        caregiverDTO.setAddress(caregiver.getAddress());
        caregiverDTO.setBirth_date(caregiver.getBirth_date());
        caregiverDTO.setGender(caregiver.getGender());
        caregiverDTO.setName(caregiver.getName());
        if (!CollectionUtils.isEmpty(caregiver.getPatients())) {
            caregiverDTO.setPatients(caregiver.getPatients().stream()
                    .map(Patient::getId)
                    .collect(Collectors.toList()));
        }
        return caregiverDTO;
    }


}
