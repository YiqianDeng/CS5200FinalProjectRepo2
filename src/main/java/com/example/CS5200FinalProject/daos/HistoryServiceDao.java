package com.example.CS5200FinalProject.daos;
import com.example.CS5200FinalProject.models.HistoryService;
import com.example.CS5200FinalProject.repositories.HistoryServiceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class HistoryServiceDao {
  @Autowired
  HistoryServiceRepository historyServiceRepository;

  @PostMapping("/api/history_services")
  public HistoryService createHistoryService(@RequestBody HistoryService historyService) {
    return historyServiceRepository.save(historyService);
  }

  @GetMapping("/api/history_services")
  public List<HistoryService> findAllHistoryServices() { return historyServiceRepository.findAllHistoryServices(); }

  @GetMapping("/api/history_services/{history_servicesId}")
  public HistoryService findHistoryServiceById(
          @PathVariable("history_servicesId") Integer id) {
    return historyServiceRepository.findHistoryServiceById(id);
  }

  @PutMapping("/api/history_services/{history_servicesId}")
  public HistoryService updateHistoryService(
          @PathVariable("history_servicesId") Integer id,
          @RequestBody HistoryService historyServiceUpdates) {
    HistoryService historyService = historyServiceRepository.findHistoryServiceById(id);
    historyService.setId(historyServiceUpdates.getId());
    historyService.setService(historyServiceUpdates.getService());
    historyService.setHistory(historyServiceUpdates.getHistory());
    return historyServiceRepository.save(historyService);
  }

  @DeleteMapping("/api/history_services/{history_servicesId}")
  public void deleteHistoryService(
          @PathVariable("history_servicesId") Integer id) {
    historyServiceRepository.deleteById(id);
  }
}
