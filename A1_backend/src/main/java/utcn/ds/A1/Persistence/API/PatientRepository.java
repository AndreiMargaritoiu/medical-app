package utcn.ds.A1.Persistence.API;

import utcn.ds.A1.Entity.Patient;

import java.util.List;
import java.util.Optional;

public interface PatientRepository {
    Patient save(Patient patient);

    Optional<Patient> findById(int id);

    Patient findByAddress(String address);

    List<Patient> findAll();

    void remove(Patient patient);

    Patient findByIdAgain(int id);
}
