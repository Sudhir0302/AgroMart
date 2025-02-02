package com.sudhir03.agro_mart;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {

    @GetMapping("/home")
    public void call(){
        System.out.print("adf");
    }
}
