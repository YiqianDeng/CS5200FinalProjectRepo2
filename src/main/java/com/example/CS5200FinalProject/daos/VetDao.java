package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Vet;
import com.example.CS5200FinalProject.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VetDao {

    @Autowired
    VetRepository vetRepository;

    @PostMapping("/api/vets")
    public Vet createVet(@RequestBody Vet vet) {
        return vetRepository.save(vet);
    }

    @GetMapping("/api/vets")
    public List<Vet> findAllVets() {
        return vetRepository.findAllVets();
    }

    @GetMapping("/api/vets/{vetId}")
    public Vet findVetById(
            @PathVariable("vetId") Integer id) {
        return vetRepository.findVetById(id);
    }

    @PutMapping("/api/vets/{vetId}")
    public Vet updateVet(
            @PathVariable("vetId") Integer id,
            @RequestBody Vet vetUpdates) {
        Vet vet = vetRepository.findVetById(id);
        vet.setFirstName(vetUpdates.getFirstName());
        vet.setLastName(vetUpdates.getLastName());
        vet.setEmail(vetUpdates.getEmail());
        vet.setPhone(vetUpdates.getPhone());
        vet.setDateOfBirth(vetUpdates.getDateOfBirth());
        vet.setSpecialty(vetUpdates.getSpecialty());
        vet.setTenure(vetUpdates.getTenure());
        return vetRepository.save(vet);
    }

    @DeleteMapping("/api/vets/{vetId}")
    public void deletePetOwner(
            @PathVariable("vetId") Integer id) {
        vetRepository.deleteById(id);
    }
}
