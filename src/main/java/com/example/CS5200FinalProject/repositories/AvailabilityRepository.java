package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.Availability;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AvailabilityRepository  extends CrudRepository<Availability, Integer> {

        @Query(value = "SELECT * FROM availability", nativeQuery = true)
        public List<Availability> findAllAvailabilities();

        @Query(value = "SELECT * FROM availability WHERE id=:availabilityId", nativeQuery = true)
        public Availability findAvailabilityById(@Param("availabilityId") Integer id);
    }


