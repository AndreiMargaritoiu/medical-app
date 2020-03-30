package utcn.ds.A1.Persistence.JPA;

import lombok.RequiredArgsConstructor;
import utcn.ds.A1.Entity.Patient;
import utcn.ds.A1.Persistence.API.PatientRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernatePatientRepository implements PatientRepository {
    private final EntityManager entityManager;

    @Override
    public Patient save(Patient patient) {
        if (patient.getId() == null) {
            entityManager.persist(patient);
            return patient;
        } else {
            return entityManager.merge(patient);
        }
    }

    @Override
    public List<Patient> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Patient> query = builder.createQuery(Patient.class);
        query.select(query.from(Patient.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Optional<Patient> findById(int id) {
        return Optional.ofNullable(entityManager.find(Patient.class, id));
    }

    @Override
    public Patient findByIdAgain(int id) {
        return entityManager.find(Patient.class, id);
    }

    @Override
    public Patient findByAddress(String address) {
        return entityManager.find(Patient.class, address);
    }

    @Override
    public void remove(Patient patient) {
        entityManager.remove(patient);
    }
}
