package com.paez.usersapp.repositories;

import com.paez.usersapp.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    // buscar por username con nomenclatura CrudRepository
    Optional<User> findByUsername(String username);

    // buscar por username con consulta Query con hibernate JPA
    @Query("select u from User u where u.username=?1")
    Optional<User> getUserByUsername(String username);
}
