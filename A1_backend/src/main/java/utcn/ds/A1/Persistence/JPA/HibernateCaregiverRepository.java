package utcn.ds.A1.Persistence.JPA;

import lombok.RequiredArgsConstructor;
import utcn.ds.A1.Entity.Caregiver;
import utcn.ds.A1.Persistence.API.CaregiverRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateCaregiverRepository implements CaregiverRepository {
    private final EntityManager entityManager;

    @Override
    public Caregiver save(Caregiver caregiver) {
        if (caregiver.getId() == null) {
            entityManager.persist(caregiver);
            return caregiver;
        } else {
            return entityManager.merge(caregiver);
        }
    }

    @Override
    public List<Caregiver> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Caregiver> query = builder.createQuery(Caregiver.class);
        query.select(query.from(Caregiver.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Optional<Caregiver> findById(int id) {
        return Optional.ofNullable(entityManager.find(Caregiver.class, id));
    }

    @Override
    public Caregiver findByIdAgain(int id) {
        return entityManager.find(Caregiver.class, id);
    }

    @Override
    public Caregiver findByName(String name) {
        return entityManager.find(Caregiver.class, name);
    }

    @Override
    public void remove(Caregiver caregiver) {
        entityManager.remove(caregiver);
    }
}
