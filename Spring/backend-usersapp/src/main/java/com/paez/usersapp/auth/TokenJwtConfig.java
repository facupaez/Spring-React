package com.paez.usersapp.auth;

import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;
import java.security.Key;

public class TokenJwtConfig {

    // key hard code
    // public final static String SECRET_KEY = "algun_token_con_frase_secreta";

    // llave secreta JWT
    public final static SecretKey SECRET_KEY = Jwts.SIG.HS256.key().build();
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String HEADER_AUTHORIZATION = "Authorization";

}
