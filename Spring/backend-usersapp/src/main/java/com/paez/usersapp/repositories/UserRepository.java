package com.paez.usersapp.repositories;

import com.paez.usersapp.entities.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
