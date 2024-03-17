package com.paez.usersapp.services;

import com.paez.usersapp.DTO.UserRequestDTO;
import com.paez.usersapp.entities.User;
import java.util.*;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(UserRequestDTO userRequestDTO, Long id);

    void delete(Long id);
}
