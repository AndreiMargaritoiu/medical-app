package utcn.ds.A1.Persistence.JPA;

import lombok.RequiredArgsConstructor;
import utcn.ds.A1.Entity.Doctor;
import utcn.ds.A1.Persistence.API.DoctorRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateDoctorRepository implements DoctorRepository {
    private final EntityManager entityManager;

    @Override
    public Doctor save(Doctor doctor) {
        if (doctor.getId() == null) {
            entityManager.persist(doctor);
            return doctor;
        } else {
            return entityManager.merge(doctor);
        }
    }

    @Override
    public List<Doctor> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Doctor> query = builder.createQuery(Doctor.class);
        query.select(query.from(Doctor.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Optional<Doctor> findById(int id) {
        return Optional.ofNullable(entityManager.find(Doctor.class, id));
    }

    @Override
    public Doctor findByName(String name) {
        return entityManager.find(Doctor.class, name);
    }

    @Override
    public void remove(Doctor doctor) {
        entityManager.remove(doctor);
    }
}
