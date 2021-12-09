package com.example.CS5200FinalProject.daos;
import com.example.CS5200FinalProject.models.PetOwner;
import com.example.CS5200FinalProject.repositories.PetOwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PetOwnerDao {

    @Autowired
    PetOwnerRepository petOwnerRepository;

    @PostMapping("/api/petOwners")
    public PetOwner createPetOwner(@RequestBody PetOwner petOwner) {
        return petOwnerRepository.save(petOwner);
    }

    @GetMapping("/api/petOwners")
    public List<PetOwner> findAllPetOwners() {
        return petOwnerRepository.findAllPetOwners();
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World";
    }

    @GetMapping("/api/petOwners/{petOwnerId}")
    public PetOwner findPetOwnerById(
            @PathVariable("petOwnerId") Integer id) {
        return petOwnerRepository.findPetOwnerById(id);
    }

    @PutMapping("/api/petOwners/{petOwnerId}")
    public PetOwner updatePetOwner(
            @PathVariable("petOwnerId") Integer id,
            @RequestBody PetOwner petOwnerUpdates) {
        PetOwner petOwner = petOwnerRepository.findPetOwnerById(id);
        petOwner.setFirstName(petOwnerUpdates.getFirstName());
        petOwner.setLastName(petOwnerUpdates.getLastName());
        petOwner.setEmail(petOwnerUpdates.getEmail());
        petOwner.setPhone(petOwnerUpdates.getPhone());
//        petOwner.setDateOfBirth(petOwnerUpdates.getDateOfBirth());
        petOwner.setUsername(petOwnerUpdates.getUsername());
        petOwner.setPassword(petOwnerUpdates.getPassword());
        petOwner.setNumberOfVisit(petOwnerUpdates.getNumberOfVisit());
        return petOwnerRepository.save(petOwner);
    }

    @DeleteMapping("/api/petOwners/{petOwnerId}")
    public void deleteUser(
            @PathVariable("petOwnerId") Integer id) {
        petOwnerRepository.deleteById(id);
    }
}
