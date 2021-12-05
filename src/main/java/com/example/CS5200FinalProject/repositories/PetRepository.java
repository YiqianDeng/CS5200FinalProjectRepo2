package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.Pet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PetRepository extends CrudRepository<Pet, Integer> {

    @Query(value = "SELECT * FROM pet", nativeQuery = true)
    public List<Pet> findAllPets();

    @Query(value = "SELECT * FROM pet WHERE id=:petId", nativeQuery = true)
    public Pet findPetById(@Param("petId") Integer id);

}
