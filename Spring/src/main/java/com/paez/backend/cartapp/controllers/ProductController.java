package com.paez.backend.cartapp.controllers;

import com.paez.backend.cartapp.models.entities.Product;
import com.paez.backend.cartapp.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> listProducts(){
        return  service.findAll();
    }
}
