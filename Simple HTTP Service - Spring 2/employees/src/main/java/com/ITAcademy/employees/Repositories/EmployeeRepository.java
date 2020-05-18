package com.ITAcademy.employees.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ITAcademy.employees.Models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}