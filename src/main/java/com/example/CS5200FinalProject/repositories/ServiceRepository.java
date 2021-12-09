package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.Service;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceRepository extends CrudRepository<Service, Integer> {

    @Query(value = "SELECT * FROM service", nativeQuery = true)
    public List<Service> findAllServices();

    @Query(value = "SELECT * FROM service WHERE id=:serviceId", nativeQuery = true)
    public Service findServiceById(@Param("serviceId") Integer id);
}
