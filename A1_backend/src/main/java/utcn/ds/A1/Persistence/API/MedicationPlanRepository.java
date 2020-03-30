package utcn.ds.A1.Persistence.API;

import utcn.ds.A1.Entity.Medication_plan;

import java.util.List;
import java.util.Optional;

public interface MedicationPlanRepository {
    Medication_plan save(Medication_plan medication_plan);

    Optional<Medication_plan> findById(int id);

    Medication_plan findByName(String name);

    List<Medication_plan> findAll();

    void remove(Medication_plan medication_plan);
}
