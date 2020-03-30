package utcn.ds.A1.Persistence.API;

import utcn.ds.A1.Entity.Doctor;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository {

    Doctor save(Doctor doctor);

    Optional<Doctor> findById(int id);

    Doctor findByName(String name);

    List<Doctor> findAll();

    void remove(Doctor doctor);
}
