package com.paez.usersapp.auth;

import com.paez.usersapp.auth.filters.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    // reglas para autenticación y autorización
    @Bean
    SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        return httpSecurity.authorizeHttpRequests((authorizeRequests) ->
                authorizeRequests
                        .requestMatchers(HttpMethod.GET, "/users").permitAll()
/*                       .requestMatchers(HttpMethod.GET, "/users/{id}").hasAnyRole("ADMIN", "USER")
                        .requestMatchers(HttpMethod.POST, "/users").hasRole("ADMIN")
                        .requestMatchers("/users/**").hasRole("ADMIN")*/
                        .anyRequest().authenticated())
                .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    // encriptado de contraseña
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager() throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }
}
