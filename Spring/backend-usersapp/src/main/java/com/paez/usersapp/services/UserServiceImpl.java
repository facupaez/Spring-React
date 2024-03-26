package com.paez.usersapp.services;

import com.paez.usersapp.DTO.UserRequestDTO;
import com.paez.usersapp.entities.User;
import com.paez.usersapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        // convertimos (cast) iterable en list
        return (List<User>) userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
    return userRepository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        // encriptando contraseña cuando creamos usuario
        String passwordBCrypt = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBCrypt);

        return userRepository.save(user);
    }

    @Override
    @Transactional
    public Optional<User> update(UserRequestDTO userRequestDTO, Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()){
            User userDb = userOptional.orElseThrow();
            userDb.setUsername(userRequestDTO.getUsername());
            userDb.setEmail(userRequestDTO.getEmail());
            return Optional.of(userRepository.save(userDb));
        }
        return Optional.empty();
    }

    @Override
    @Transactional
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
