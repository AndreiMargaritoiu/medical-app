package utcn.ds.A1.Persistence.API;


import utcn.ds.A1.Entity.Users;

import java.util.List;
import java.util.Optional;

public interface UsersRepository {
    Users save(Users user);

    Optional<Users> findById(int id);

    Users findByName(String name);

    List<Users> findAll();

    void remove(Users user);
}
