package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Availability;
import com.example.CS5200FinalProject.models.Pet;
import com.example.CS5200FinalProject.models.PetOwner;
import com.example.CS5200FinalProject.models.Vet;
import com.example.CS5200FinalProject.repositories.AvailabilityRepository;
import com.example.CS5200FinalProject.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AvailabilityDao {
    @Autowired
    AvailabilityRepository availabilityRepository;

    @Autowired
    VetRepository vetRepository;

    @PostMapping("/api/vets/{vetId}/availabilities")
    public Availability createAvailability(@PathVariable("vetId") Integer vetId,
                                           @RequestBody Availability availability) {
        availability = availabilityRepository.save(availability);
        Vet vet = vetRepository.findVetById(vetId);
        availability.setVet(vet);
        return availabilityRepository.save(availability);
    }

    @GetMapping("/api/availabilities")
    public List<Availability> findAllAvailabilities() { return availabilityRepository.findAllAvailabilities(); }

    @GetMapping("/api/availabilities/{availabilityId}")
    public Availability findAvailabilityById(
            @PathVariable("availabilityId") Integer id) {
        return availabilityRepository.findAvailabilityById(id);
    }

    @GetMapping("/api/vets/{vetId}/availabilities")
    public List<Availability> findAvailabilitiesForVet(
            @PathVariable("vetId") Integer vetId) {
        Vet vet = vetRepository.findById(vetId).get();
        return vet.getAvailabilities();
    }

    @PutMapping("/api/availabilities/{availabilityId}")
    public Availability updateAvailability(
            @PathVariable("availabilityId") Integer id,
            @RequestBody Availability availabilityUpdates) {
        Availability availability = availabilityRepository.findAvailabilityById(id);
        availability.setAvailable(availabilityUpdates.isAvailable());
        availability.setDate(availabilityUpdates.getDate());
        availability.setTimeSlot(availabilityUpdates.getTimeSlot());
        return availabilityRepository.save(availability);
    }

    @DeleteMapping("/api/availabilities/{availabilityId}")
    public void deleteAvailability(
            @PathVariable("availabilityId") Integer id) {
        availabilityRepository.deleteById(id);
    }
}
