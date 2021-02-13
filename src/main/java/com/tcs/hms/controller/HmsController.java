package com.tcs.hms.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HmsController {
    @GetMapping("/")
    public String checkController(){
        return "Health Monitoring System is starting !!!";
    }
}
