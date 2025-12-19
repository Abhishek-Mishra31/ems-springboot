package com.example.demo.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Event;


@Repository
public interface EventRepository  extends JpaRepository<Event, Long> {
    // we will perform all the db operations here 
    
}
