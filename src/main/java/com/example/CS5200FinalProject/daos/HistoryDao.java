package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.History;
import com.example.CS5200FinalProject.repositories.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class HistoryDao {

    @Autowired
    HistoryRepository repository;

    @PostMapping("/api/histories")
    public History createHistory(@RequestBody History history) {
        return repository.save(history);
    }

    @GetMapping("/api/histories")
    public List<History> findAllHistories() {
        return (List<History>) repository.findAll();
    }

    @GetMapping("/api//histories/{id}")
    public History findHistoryById(@PathVariable("id") Integer id) {
        return repository.findHistoriesById(id);
    }

    @GetMapping("/api/histories/{id}")
    public History updateHistory(
            @PathVariable("id") Integer id,
            @RequestBody History historyUpdate) {
        History history = repository.findHistoriesById(id);
        history.setHistoryServices(historyUpdate.getHistoryServices());
        history.setVet(historyUpdate.getVet());
        history.setPet(historyUpdate.getPet());
        history.setTime(historyUpdate.getTime());
        return repository.save(history);
    }

    @DeleteMapping("api/histories/{id}")
    public void deleteHistory(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
