package com.example.demo.model;
import java.time.LocalDate;
import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity  // this class an entity class to make table in database class name become table name 

@Data  // to generate getters and setters automatically
@AllArgsConstructor  // to generate constructor with all parameters, data set by the setters
@NoArgsConstructor  // to generate constructor with no parameters, data set to default values 
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private LocalDate date;

}