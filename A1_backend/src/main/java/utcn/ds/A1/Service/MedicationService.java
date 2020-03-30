package utcn.ds.A1.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utcn.ds.A1.DTO.MedicationDTO;
import utcn.ds.A1.Entity.Caregiver;
import utcn.ds.A1.Entity.Medication;
import utcn.ds.A1.Persistence.API.CaregiverRepository;
import utcn.ds.A1.Persistence.API.MedicationRepository;
import utcn.ds.A1.Persistence.API.RepositoryFactory;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MedicationService {
    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<MedicationDTO> listAll() {
        return repositoryFactory.createMedicationRepository().findAll().stream()
                .map(MedicationDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public MedicationDTO create(MedicationDTO dto) {
        Medication medication = new Medication();

        medication.setDosage(dto.getDosage());
        medication.setName(dto.getName());
        medication.setSide_effects(dto.getSide_effects());
        MedicationDTO output = MedicationDTO.ofEntity(repositoryFactory.createMedicationRepository().save(medication));
        return output;
    }

    @Transactional
    public void remove(int id) {
        MedicationRepository medicationRepository = repositoryFactory.createMedicationRepository();
        Medication medication = medicationRepository.findByIdAgain(id);
        medicationRepository.remove(medication);
    }

    @Transactional
    public MedicationDTO updateMedication(int id, MedicationDTO medicationDTO) {
        MedicationRepository mr = repositoryFactory.createMedicationRepository();
        Medication medication = mr.findByIdAgain(id);
        medication.setDosage(medicationDTO.getDosage());
        MedicationDTO output = MedicationDTO.ofEntity(mr.save(medication));
        return medicationDTO;
    }
}
