package utcn.ds.A1.Persistence.API;

import utcn.ds.A1.Entity.Caregiver;

import java.util.List;
import java.util.Optional;

public interface CaregiverRepository {
    Caregiver save(Caregiver caregiver);

    Optional<Caregiver> findById(int id);

    Caregiver findByName(String name);

    List<Caregiver> findAll();

    void remove(Caregiver caregiver);

    Caregiver findByIdAgain(int id);
}
