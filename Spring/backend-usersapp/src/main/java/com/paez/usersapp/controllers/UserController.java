package com.paez.usersapp.controllers;

import com.paez.usersapp.DTO.UserRequestDTO;
import com.paez.usersapp.entities.User;
import com.paez.usersapp.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(originPatterns = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> findAll(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<User> userOptional = userService.findById(id);
        if (userOptional.isPresent()){
            return ResponseEntity.ok(userOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> saveUser(@Valid @RequestBody User user, BindingResult result){
        if (result.hasErrors()){
            return handleValidationResult(result);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@Valid @RequestBody UserRequestDTO userRequestDTO, BindingResult result, @PathVariable Long id){
        if (result.hasErrors()){
            return handleValidationResult(result);
        }
        Optional<User> userOptional = userService.update(userRequestDTO, id);
        if (userOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.CREATED).body(userOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        Optional<User> userOptional = userService.findById(id);
        if (userOptional.isPresent()){
            userService.delete(id);
            return ResponseEntity.noContent().build(); //status 204
        }
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity<?> handleValidationResult(BindingResult result) {
        Map<String, String> errors = new HashMap<>();

        result.getFieldErrors().forEach(err -> {
            errors.put(err.getField(), err.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }
}
