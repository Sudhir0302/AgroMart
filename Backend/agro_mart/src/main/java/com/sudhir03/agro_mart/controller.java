package com.sudhir03.agro_mart;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @CrossOrigin(origins = "*")
    @GetMapping("/home")
    public String call(){
        return "helloooo";
    }
}
