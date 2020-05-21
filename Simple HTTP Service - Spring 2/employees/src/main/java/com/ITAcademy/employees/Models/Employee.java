package com.ITAcademy.employees.Models;

import lombok.Data;

import com.ITAcademy.employees.Models.Role.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity

//Las faenas/works son FIJAS, DEFINIDAS en un ENUMERABLE  en el que se asignara un salario automaticamente al crear el worker

public class Employee {

    private @Id @GeneratedValue Long Id;
    private String name;
    private Role role;
    private int salary;

    public Employee() { }

    public Employee(String name,Role role, int salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

        // añadidendo el salario
    public int getSalary() { return salary; }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
