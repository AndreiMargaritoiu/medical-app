package utcn.ds.A1.Service;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utcn.ds.A1.DTO.CaregiverDTO;
import utcn.ds.A1.DTO.PatientDTO;
import utcn.ds.A1.Entity.Caregiver;
import utcn.ds.A1.Entity.Patient;
import utcn.ds.A1.Persistence.API.CaregiverRepository;
import utcn.ds.A1.Persistence.API.PatientRepository;
import utcn.ds.A1.Persistence.API.RepositoryFactory;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CaregiverService {
    private final RepositoryFactory repositoryFactory;
    private PatientRepository pr;

    @Transactional
    public List<CaregiverDTO> listAll() {
        return repositoryFactory.createCaregiverRepository().findAll().stream()
                .map(CaregiverDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public CaregiverDTO create(CaregiverDTO dto) {
        Caregiver caregiver = new Caregiver();
        caregiver.setAddress(dto.getAddress());
        caregiver.setBirth_date(dto.getBirth_date());
        caregiver.setGender(dto.getGender());
        caregiver.setName(dto.getName());

        CaregiverDTO output = CaregiverDTO.ofEntity(repositoryFactory.createCaregiverRepository().save(caregiver));
        return output;
    }

    @Transactional
    public void remove(int id) {
        CaregiverRepository caregiverRepository = repositoryFactory.createCaregiverRepository();
        Caregiver caregiver = caregiverRepository.findByIdAgain(id);
        caregiverRepository.remove(caregiver);
    }

    @Transactional
    public CaregiverDTO updateCaregiver(int id, CaregiverDTO caregiverDTO) {
        CaregiverRepository cr = repositoryFactory.createCaregiverRepository();
        Caregiver caregiver = cr.findByIdAgain(id);
        caregiver.setAddress(caregiverDTO.getAddress());
        CaregiverDTO output = CaregiverDTO.ofEntity(cr.save(caregiver));
        return caregiverDTO;
    }
}
