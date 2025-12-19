package com.example.demo.service;

import java.util.Optional;
import com.example.demo.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.EventRepository;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Service
public class EventService {

    @Autowired
    private EventRepository repository;

    public Event createEvent(Event event) {
        return repository.save(event);
    }

    public List<Event> getAllEvents() {
        return repository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return repository.findById(id);
    }

    public void deleteEvent(Long id) {
        repository.deleteById(id);
    }

    public Event updateEvent(Long id, Event updatedEvent) {
        return repository.findById(id).map(event -> {
            event.setName(updatedEvent.getName());
            event.setDate(updatedEvent.getDate());
            event.setLocation(updatedEvent.getLocation());
            return repository.save(event);
        }).orElseGet(() -> {
            updatedEvent.setId(id);
            return repository.save(updatedEvent);
        });
    }


    public Page<Event> getEventsPaginated(int page, int size) {
        
        Pageable pageable = PageRequest.of(page, size);
       
        return repository.findAll(pageable);
    }

    public List<Event> getEventsSorted(String sortBy, String direction) {
       
        Sort.Direction sortDirection = Sort.Direction.ASC;
        if (direction != null && direction.equalsIgnoreCase("desc")) {
            sortDirection = Sort.Direction.DESC;
        }

    
        String validatedSortBy = sortBy;
        if (sortBy == null || (!sortBy.equals("name") && !sortBy.equals("date") && !sortBy.equals("location"))) {
            validatedSortBy = "name";
        }

        Sort sort = Sort.by(sortDirection, validatedSortBy);
        return repository.findAll(sort);
    }

}
