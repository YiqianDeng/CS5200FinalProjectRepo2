package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.Vet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VetRepository extends CrudRepository<Vet, Integer> {

    @Query(value = "SELECT * FROM vet", nativeQuery = true)
    public List<Vet> findAllVets();

    @Query(value = "SELECT * FROM vet WHERE id=:vetId", nativeQuery = true)
    public Vet findVetById(@Param("vetId") Integer id);
}
