package com.example.CS5200FinalProject.daos;
import com.example.CS5200FinalProject.models.History;
import com.example.CS5200FinalProject.models.HistoryService;
import com.example.CS5200FinalProject.models.Service;
import com.example.CS5200FinalProject.repositories.HistoryRepository;
import com.example.CS5200FinalProject.repositories.HistoryServiceRepository;

import com.example.CS5200FinalProject.repositories.ServiceRepository;
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

  @Autowired
  HistoryRepository historyRepository;

  @Autowired
  ServiceRepository serviceRepository;

  @PostMapping("/api/histories/{historyId}/services/{serviceId}/history_services")
  public HistoryService createHistoryService(
          @PathVariable("historyId") Integer historyId,
          @PathVariable("serviceId") Integer serviceId,
          @RequestBody HistoryService historyService) {
      historyService = historyServiceRepository.save(historyService);
      History history = historyRepository.findHistoriesById(historyId);
      Service service = serviceRepository.findServiceById(serviceId);
      historyService.setHistory(history);
      historyService.setService(service);
      return historyServiceRepository.save(historyService);
  }

  @GetMapping("/api/history_services")
  public List<HistoryService> findAllHistoryServices() { return historyServiceRepository.findAllHistoryServices(); }

  @GetMapping("/api/history_services/{history_servicesId}")
  public HistoryService findHistoryServiceById(
          @PathVariable("history_servicesId") Integer id) {
    return historyServiceRepository.findHistoryServiceById(id);
  }

  @DeleteMapping("/api/history_services/{history_servicesId}")
  public void deleteHistoryService(
          @PathVariable("history_servicesId") Integer id) {
    historyServiceRepository.deleteById(id);
  }
}
