package utcn.ds.A1.Persistence.API;

import utcn.ds.A1.Entity.Medication;

import java.util.List;
import java.util.Optional;

public interface MedicationRepository {
    Medication save(Medication medication);

    Optional<Medication> findById(int id);

    Medication findByName(String name);

    List<Medication> findAll();

    void remove(Medication medication);

    Medication findByIdAgain(int id);
}
