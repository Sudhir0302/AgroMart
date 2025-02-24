package com.sudhir03.agro_mart.controller;

import com.sudhir03.agro_mart.model.Cart;
import com.sudhir03.agro_mart.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class Cartcontroller {

    @Autowired
    private CartRepo cartRepo;

    @PostMapping("/addcart")
    public ResponseEntity<?> addcart(@RequestBody Cart cart){
        try{
            Cart saved= cartRepo.save(cart);
            return ResponseEntity.ok(saved);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
