package com.wehee.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ProjectInitializer implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Application started! This code will run on startup.");
    }
}
