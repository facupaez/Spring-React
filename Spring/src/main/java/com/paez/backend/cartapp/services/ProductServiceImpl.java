package com.paez.backend.cartapp.services;

import com.paez.backend.cartapp.models.entities.Product;
import com.paez.backend.cartapp.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> findAll() {
        /* Hacemos un cast de iterable a lista */
        return (List<Product>) repository.findAll();
    }
}
