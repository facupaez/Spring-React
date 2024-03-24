package com.paez.usersapp.auth.filters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.paez.usersapp.auth.TokenJwtConfig;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.*;

public class JwtValidationFilter extends BasicAuthenticationFilter {

    public JwtValidationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        super.doFilterInternal(request, response, chain);

        // recuperamos header authorization
        String header = request.getHeader(TokenJwtConfig.HEADER_AUTHORIZATION);

        // se ejecuta en todos los request
        if (header == null || !header.startsWith(TokenJwtConfig.PREFIX_TOKEN)){
            chain.doFilter(request, response);
            return;
        }

        // eliminamos palabra "Bearer" de la cabecera
        String token = header.replace(TokenJwtConfig.PREFIX_TOKEN, "");
        // decodificamos en bytes el token de la cabecera
        byte[] tokenDecodeBytes = Base64.getDecoder().decode(token);
        // convertimos el token a cadena String
        String tokenDecode = new String(tokenDecodeBytes);
        // separamos el usuario del token que vienen en la cadena anterior
        String[] tokenArr = tokenDecode.split(".");
        // guardamos token
        String secret = tokenArr[0];
        // guardamos user
        String username = tokenArr[1];

        if (TokenJwtConfig.SECRET_KEY.equals(secret)){
            List<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, null, authorities);

            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            chain.doFilter(request, response);
        }else{
            Map<String, String> body = new HashMap<>();
            body.put("message", "El token JWT no es válido.");

            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(403);
            response.setContentType("application/json");
        }
    }
}
