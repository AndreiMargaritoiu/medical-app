package utcn.ds.A1.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utcn.ds.A1.DTO.PatientDTO;
import utcn.ds.A1.Entity.Patient;
import utcn.ds.A1.Persistence.API.PatientRepository;
import utcn.ds.A1.Persistence.API.RepositoryFactory;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PatientService {
    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<PatientDTO> listAll() {
        return repositoryFactory.createPatientRepository().findAll().stream()
                .map(PatientDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public PatientDTO create(PatientDTO dto) {
        Patient patient = new Patient();

        patient.setAddress(dto.getAddress());
        patient.setBirth_date(dto.getBirth_date());
        patient.setCaregiver(repositoryFactory.createCaregiverRepository().findByIdAgain(dto.getCaregiver_id()));
        patient.setGender(dto.getGender());
        patient.setMedical_record(dto.getMedical_record());
        patient.setName(dto.getName());
        PatientDTO output = PatientDTO.ofEntity(repositoryFactory.createPatientRepository().save(patient));
        return output;
    }

    @Transactional
    public void remove(int id) {
        PatientRepository patientRepository = repositoryFactory.createPatientRepository();
        Patient patient = patientRepository.findByIdAgain(id);
        patientRepository.remove(patient);
    }

    @Transactional
    public PatientDTO updatePatient(int id, PatientDTO patientDTO) {
        PatientRepository pr = repositoryFactory.createPatientRepository();
        Patient patient = pr.findByIdAgain(id);
        patient.setMedical_record(patientDTO.getMedical_record());
        PatientDTO output = PatientDTO.ofEntity(pr.save(patient));
        return patientDTO;
    }
}

