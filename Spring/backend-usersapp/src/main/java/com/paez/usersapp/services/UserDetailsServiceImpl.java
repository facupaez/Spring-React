package com.paez.usersapp.services;

import com.paez.usersapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<com.paez.usersapp.entities.User> oUser = userRepository.getUserByUsername(username);

        // si el usuario no se encuentra lanzamos excepción (hardcode)

/*        if (!username.equals("admin")){
            throw new UsernameNotFoundException(String.format("El usuario %s no existe en el sistema", username));
        }*/
        // si el usuario no se encuentra lanzamos excepción (robusto)
        if (!oUser.isPresent()){
            throw new UsernameNotFoundException(String.format("El usuario %s no existe en el sistema", username));
        }

        com.paez.usersapp.entities.User user = oUser.orElseThrow();

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        // hardcode
        //return new User(username, "$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS", true, true, true, true, authorities);

        return new User(user.getUsername(), user.getPassword(), true, true, true, true, authorities);
    }
}
