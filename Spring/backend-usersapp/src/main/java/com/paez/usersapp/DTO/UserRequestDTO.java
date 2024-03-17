package com.paez.usersapp.DTO;

import jakarta.validation.constraints.*;

public class UserRequestDTO {

    @NotBlank(message = "El usuario no puede estar vacío.")
    @Size(min = 4, message = "El usuario debe tener un mínimo de 4 carácteres.")
    private String username;

    @NotBlank(message = "El email no puede estar vacío.")
    @Email(message = "El email debe ser válido.")
    private String email;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
