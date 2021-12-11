package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Availability;
import com.example.CS5200FinalProject.repositories.AvailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AvailabilityDao {
    @Autowired
    AvailabilityRepository availabilityRepository;

    @PostMapping("/api/availabilities")
    public Availability createAvailability(@RequestBody Availability availability) { return availabilityRepository.save(availability); }

    @GetMapping("/api/availabilities")
    public List<Availability> findAllAvailabilities() { return availabilityRepository.findAllAvailabilities(); }

    @GetMapping("/api/availabilities/{availabilityId}")
    public Availability findAvailabilityById(
            @PathVariable("availabilityId") Integer id) {
        return availabilityRepository.findAvailabilityById(id);
    }

    @PutMapping("/api/availabilities/{availabilityId}")
    public Availability updateAvailability(
            @PathVariable("availabilityId") Integer id,
            @RequestBody Availability availabilityUpdates) {
        Availability availability = availabilityRepository.findAvailabilityById(id);
        availability.setAvailable(availabilityUpdates.isAvailable());
        availability.setDate(availabilityUpdates.getDate());
        availability.setTimeSlot(availabilityUpdates.getTimeSlot());
        availability.setVet(availabilityUpdates.getVet());
        return availabilityRepository.save(availability);
    }

    @DeleteMapping("/api/availabilities/{availabilityId}")
    public void deleteAvailability(
            @PathVariable("availabilityId") Integer id) {
        availabilityRepository.deleteById(id);
    }
}
