package com.paez.usersapp.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El usuario no puede estar vacío.")
    @Size(min = 4, message = "El usuario debe tener un mínimo de 4 carácteres.")
    @Column(unique = true)
    private String username;

    @NotBlank(message = "La contraseña no puede estar vacía.")
    @Size(min = 5, message = "La contraseña debe tener un mínimo de 5 dígitos.")
    private String password;

    @NotBlank(message = "El email no puede estar vacío.")
    @Email(message = "El email debe ser válido.")
    @Column(unique = true)
    private String email;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email.trim();
    }
}
