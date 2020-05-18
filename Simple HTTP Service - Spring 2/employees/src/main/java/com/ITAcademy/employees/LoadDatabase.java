package com.ITAcademy.employees;

import com.ITAcademy.employees.Models.Employee;
import com.ITAcademy.employees.Repositories.EmployeeRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    @Bean
    CommandLineRunner initDatabase(EmployeeRepository repository) {
        return args -> {
            System.out.println("Preloading Data to memoryDatabase");
            repository.save(new Employee("Bilbo Baggins", "Burglar", 10));
            repository.save(new Employee("Frodo Baggins", "Thief", 50));
            repository.save(new Employee("Aragorn", "Warrior", 30));
            System.out.println("Data loaded");
        };
    }
}
