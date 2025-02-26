package com.sudhir03.agro_mart.controller;

import com.sudhir03.agro_mart.model.Cart;
import com.sudhir03.agro_mart.model.UserDTO;
import com.sudhir03.agro_mart.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class Cartcontroller {

    @Autowired
    private CartRepo cartRepo;

    @PutMapping("/addcart")
    public ResponseEntity<?> addcart(@RequestBody Cart cart){
        try{
//            Cart saved= cartRepo.save(cart);
            List<Cart> exist=cartRepo.findByUsername(cart.getUsername());
            for(Cart cart1 : exist)
            {
                if(cart1.getProduct().equals(cart.getProduct())){
                    cart1.setQnty(cart1.getQnty()+cart.getQnty());
                    cartRepo.save(cart1);
                    return ResponseEntity.ok(200);
                }
            }
            cartRepo.save(cart);
            return ResponseEntity.ok(200);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getcart")
    public ResponseEntity<?> getCart(@RequestParam String username)
    {
        System.out.println(username);
        List<Cart> res=cartRepo.findByUsername(username);
        System.out.println(res);
        return ResponseEntity.ok(res);
    }

}
