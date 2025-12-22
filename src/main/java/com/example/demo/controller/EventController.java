package com.example.demo.controller;

import com.example.demo.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.data.domain.Page;
import java.util.List;

import com.example.demo.model.Event;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping("/event")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    @GetMapping("/getEvents")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @PutMapping("/updateEvents")
    public Event updateEvent(@RequestBody Event event) {
        return eventService.updateEvent(event.getId(), event);
    }

    @DeleteMapping("/deleteEvents")
    public void deleteEvent(@RequestBody Event event) {
        eventService.deleteEvent(event.getId());
    }

    @GetMapping("/events/paginated")
    public Page<Event> getEventsPaginated(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return eventService.getEventsPaginated(page, size);
    }

    @GetMapping("/events/sorted")
    public List<Event> getEventsSorted(
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {
        return eventService.getEventsSorted(sortBy, direction);
    }

    @GetMapping("/events/paginatedAndSorted")
    public Page<Event> getEventsPaginatedAndSorted(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {
        return eventService.getEventsPaginatedAndSorted(page, size, sortBy, direction);
    }

}
