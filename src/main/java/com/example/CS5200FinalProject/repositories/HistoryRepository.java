package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.History;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoryRepository extends CrudRepository<History, Integer> {

    @Query("SELECT history FROM History history")
    public List<History> findAllHistories();

    @Query("SELECT history FROM History history WHERE history.id=:id")
    public History findHistoriesById(@Param("id") Integer id);
}
