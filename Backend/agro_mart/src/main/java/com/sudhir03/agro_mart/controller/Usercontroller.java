package com.sudhir03.agro_mart.controller;

import com.sudhir03.agro_mart.model.User;
import com.sudhir03.agro_mart.model.UserDTO;
import com.sudhir03.agro_mart.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class Usercontroller {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/home")
    public String call(){
//        System.out.println("adf");
        return "hello";
    }

    @GetMapping("/")
    public String call1(){
        return "agromartttt";
    }

    @PutMapping("/users")
    public ResponseEntity<?> getuser(@RequestBody UserDTO user){
        User exists=userRepo.findByEmail(user.getUsername());
        if(exists!=null){
            return ResponseEntity.ok(exists);
        }
        return new ResponseEntity<>("user not found",HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/users1")
    public ResponseEntity<?> postuser(@RequestBody User user){
        try{
            User saved=userRepo.save(user);
            return ResponseEntity.ok(saved);
        }catch (Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
