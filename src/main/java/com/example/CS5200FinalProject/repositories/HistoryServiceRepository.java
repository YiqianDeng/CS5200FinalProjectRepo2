package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.HistoryService;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoryServiceRepository extends CrudRepository<HistoryService, Integer> {
  @Query(value = "SELECT * FROM history_service", nativeQuery = true)
  public List<HistoryService> findAllHistoryServices();

  @Query(value = "SELECT * FROM history_service WHERE id=:history_serviceId", nativeQuery = true)
  public HistoryService findHistoryServiceById(@Param("history_serviceId") Integer id);
}
