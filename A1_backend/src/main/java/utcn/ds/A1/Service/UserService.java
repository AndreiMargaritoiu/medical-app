package utcn.ds.A1.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import utcn.ds.A1.Entity.Doctor;
import utcn.ds.A1.Persistence.API.RepositoryFactory;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private final RepositoryFactory repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Doctor doctor = repository.createDoctorRepository().findById(1).get();
        return new org.springframework.security.core.userdetails.User(doctor.getName(), doctor.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_DOCTOR"))) {
        };
    }

    @Transactional
    public Doctor loadCurrentUser() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return repository.createDoctorRepository().findById(1).get();
    }

}
