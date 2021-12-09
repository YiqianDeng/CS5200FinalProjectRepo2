package com.example.CS5200FinalProject.repositories;
import com.example.CS5200FinalProject.models.PetOwner;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface PetOwnerRepository extends CrudRepository<PetOwner, Integer> {

    @Query(value = "SELECT * FROM pet_owner", nativeQuery = true)
    public List<PetOwner> findAllPetOwners();

    @Query(value = "SELECT * FROM pet_owner WHERE id=:petOwnerId", nativeQuery = true)
    public PetOwner findPetOwnerById(@Param("petOwnerId") Integer id);
}
