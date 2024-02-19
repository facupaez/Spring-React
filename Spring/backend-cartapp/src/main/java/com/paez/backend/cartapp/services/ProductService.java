package com.paez.backend.cartapp.services;

import com.paez.backend.cartapp.models.entities.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
}
