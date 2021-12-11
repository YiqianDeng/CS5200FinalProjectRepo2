package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.ReserveService;
import com.example.CS5200FinalProject.models.Service;
import com.example.CS5200FinalProject.repositories.ReserveServiceRepository;

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
public class ReserveServiceDao {
  @Autowired
  ReserveServiceRepository reserveServiceRepository;

  @PostMapping("/api/reserve_services")
  public ReserveService createReserveService(@RequestBody ReserveService reserveService) {
    return reserveServiceRepository.save(reserveService);
  }

  @GetMapping("/api/reserve_services")
  public List<ReserveService> findAllReserveServices() { return reserveServiceRepository.findAllReserveServices(); }

  @GetMapping("/api/reserve_services/{reserve_servicesId}")
  public ReserveService findReserveServiceById(
          @PathVariable("reserve_servicesId") Integer id) {
    return reserveServiceRepository.findReserveServiceById(id);
  }

  @PutMapping("/api/reserve_services/{reserve_servicesId}")
  public ReserveService updateReserveService(
          @PathVariable("reserve_servicesId") Integer id,
          @RequestBody ReserveService reserveServiceUpdates) {
    ReserveService reserveService = reserveServiceRepository.findReserveServiceById(id);
    reserveService.setId(reserveServiceUpdates.getId());
    reserveService.setService(reserveServiceUpdates.getService());
    reserveService.setReservation(reserveServiceUpdates.getReservation());
    return reserveServiceRepository.save(reserveService);
  }

  @DeleteMapping("/api/reserve_services/{reserve_servicesId}")
  public void deleteReserveService(
          @PathVariable("reserve_servicesId") Integer id) {
    reserveServiceRepository.deleteById(id);
  }

}
