package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Pet;
import com.example.CS5200FinalProject.models.PetOwner;
import com.example.CS5200FinalProject.repositories.PetOwnerRepository;
import com.example.CS5200FinalProject.repositories.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PetDao {

    @Autowired
    PetRepository petRepository;

    @Autowired
    PetOwnerRepository petOwnerRepository;

    @PostMapping("/api/petOwners/{petOwnerId}/pets")
    public Pet createPet(@PathVariable("petOwnerId") Integer petOwnerId,
                         @RequestBody Pet pet) {
        pet = petRepository.save(pet);
        PetOwner petOwner = petOwnerRepository.findPetOwnerById(petOwnerId);
        pet.setPetOwner(petOwner);
        return petRepository.save(pet);
    }

    @GetMapping("/api/pets")
    public List<Pet> findAllPets() { return petRepository.findAllPets(); }

    @GetMapping("/api/pets/{petId}")
    public Pet findPetById(
            @PathVariable("petId") Integer id) {
        return petRepository.findPetById(id);
    }

    @GetMapping("/api/petOwners/{petOwnerId}/pets")
    public List<Pet> findPetsForPetOwner(
            @PathVariable("petOwnerId") Integer petOwnerId) {
        PetOwner petOwner = petOwnerRepository.findById(petOwnerId).get();
        return petOwner.getPets();
    }

    @PutMapping("/api/pets/{petId}")
    public Pet updatePet(
            @PathVariable("petId") Integer id,
            @RequestBody Pet petUpdates) {
        Pet pet = petRepository.findPetById(id);
//        pet.setPetOwner(petUpdates.getPetOwner());
        pet.setSpecies(petUpdates.getSpecies());
        pet.setAge(petUpdates.getAge());
        pet.setReservations(petUpdates.getReservations());
        pet.setHistories(petUpdates.getHistories());
        return petRepository.save(pet);
    }

    @DeleteMapping("/api/pets/{petId}")
    public void deletePet(
            @PathVariable("petId") Integer id) {
        petRepository.deleteById(id);
    }
}
