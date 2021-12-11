package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.ReserveService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReserveServiceRepository extends CrudRepository<ReserveService, Integer> {

  @Query(value = "SELECT * FROM reserve_service", nativeQuery = true)
  public List<ReserveService> findAllReserveServices();

  @Query(value = "SELECT * FROM reserve_service WHERE id=:reserve_serviceId", nativeQuery = true)
  public ReserveService findReserveServiceById(@Param("reserve_serviceId") Integer id);

}
