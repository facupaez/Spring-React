package com.paez.usersapp.auth.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.paez.usersapp.entities.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.*;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager){
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        // método que se implementa cuando hacemos el login

        User user = null;
        String username = null;
        String password = null;

        try {
            user = new ObjectMapper().readValue(request.getInputStream(), User.class);
            username = user.getUsername();
            password = user.getPassword();

         /*   logger.info("Username desde request InputStream (raw)" + username);
            logger.info("Password desde request InputStream (raw)" + password);*/
        } catch (IOException e) {
            e.printStackTrace();
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(username, password);

        return authenticationManager.authenticate(authToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        // si la autenticación es correcta obtenemos username
        String username = (( org.springframework.security.core.userdetails.User) authResult.getPrincipal())
                .getUsername();
        // generamos token artesanal
        String originalInput = "algun_token_con_frase_secreta." + username;
        String token = Base64.getEncoder().encodeToString(originalInput.getBytes());
        // creamos cabecera
        response.addHeader("Authorization", "Bearer " + token);
        // creamos un objeto que se convertirá a json
        Map<String, Object> body = new HashMap<>();
        body.put("token", token);
        body.put("message", String.format("Hola %s, has iniciado sesión con éxito.", username));
        body.put("username", username);
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {

        // cuando falla enviamos msj de error
        Map<String, Object> body = new HashMap<>();
        body.put("message", "Error en la autenticación, username o password incorrecto.");
        body.put("error", failed.getMessage());

        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(401);
        response.setContentType("application/json");
    }
}
