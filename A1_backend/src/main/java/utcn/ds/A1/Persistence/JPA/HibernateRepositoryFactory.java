package utcn.ds.A1.Persistence.JPA;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import utcn.ds.A1.Persistence.API.*;

import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class HibernateRepositoryFactory implements RepositoryFactory {
    private final EntityManager entityManager;

    @Override
    public PatientRepository createPatientRepository() {
        return new HibernatePatientRepository(entityManager);
    }

    @Override
    public DoctorRepository createDoctorRepository() {
        return new HibernateDoctorRepository(entityManager);
    }

    @Override
    public CaregiverRepository createCaregiverRepository() {
        return new HibernateCaregiverRepository(entityManager);
    }

    @Override
    public MedicationRepository createMedicationRepository() {
        return new HibernateMedicationRepository(entityManager);
    }

}
