package utcn.ds.A1.Seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import utcn.ds.A1.Entity.Doctor;
import utcn.ds.A1.Persistence.API.DoctorRepository;
import utcn.ds.A1.Persistence.API.RepositoryFactory;

@Component
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE)
public class ApplicationSeed implements CommandLineRunner {
    private final RepositoryFactory repositoryFactory;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        DoctorRepository doctorRepository = repositoryFactory.createDoctorRepository();
        Doctor doctor = new Doctor(1, "beatrice", passwordEncoder.encode("otto"));
        doctorRepository.save(doctor);

        System.out.println(doctor.getPassword());
    }

    @Transactional
    public void clear() {

    }
}
