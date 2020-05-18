package com.ITAcademy.restproject;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import java.util.concurrent.atomic.AtomicLong;

@RestController

public class HelloController {

    private static final String template = "Hello, Alex";

    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greetings")

    public Greetings greetings(@RequestParam(value="Alex", defaultValue="World") final String name) {

        return new Greetings(counter.incrementAndGet(), String.format(template, name));
    }

}