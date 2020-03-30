package utcn.ds.A1.Persistence.JPA;

import lombok.RequiredArgsConstructor;
import utcn.ds.A1.Entity.Medication;
import utcn.ds.A1.Persistence.API.MedicationRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateMedicationRepository implements MedicationRepository {
    private final EntityManager entityManager;

    @Override
    public Medication save(Medication medication) {
        if (medication.getId() == null) {
            entityManager.persist(medication);
            return medication;
        } else {
            return entityManager.merge(medication);
        }
    }

    @Override
    public List<Medication> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Medication> query = builder.createQuery(Medication.class);
        query.select(query.from(Medication.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Optional<Medication> findById(int id) {
        return Optional.ofNullable(entityManager.find(Medication.class, id));
    }

    @Override
    public Medication findByIdAgain(int id) {
        return entityManager.find(Medication.class, id);
    }

    @Override
    public Medication findByName(String name) {
        return entityManager.find(Medication.class, name);
    }

    @Override
    public void remove(Medication medication) {
        entityManager.remove(medication);
    }
}
