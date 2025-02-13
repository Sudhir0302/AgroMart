package com.sudhir03.agro_mart.controller;

import com.sudhir03.agro_mart.model.User;
import com.sudhir03.agro_mart.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class controller {

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

    @GetMapping("/users")
    public List<User> getuser(){
        return userRepo.findAll();
    }
}
