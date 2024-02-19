package com.paez.backend.cartapp.repositories;

import com.paez.backend.cartapp.models.entities.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
}
