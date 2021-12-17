package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.History;
import com.example.CS5200FinalProject.models.Pet;
import com.example.CS5200FinalProject.models.PetOwner;
import com.example.CS5200FinalProject.models.Reservation;
import com.example.CS5200FinalProject.models.ReserveService;
import com.example.CS5200FinalProject.models.Service;
import com.example.CS5200FinalProject.repositories.ReservationRepository;
import com.example.CS5200FinalProject.repositories.ReserveServiceRepository;

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
public class ReserveServiceDao {
  @Autowired
  ReserveServiceRepository reserveServiceRepository;

  @Autowired
  ReservationRepository reservationRepository;

  @Autowired
  ServiceRepository serviceRepository;

  @PostMapping("/api/reservations/{reservationId}/services/{serviceId}/reserve_services")
  public ReserveService createReserveService(
          @PathVariable("reservationId") Integer reservationId,
          @PathVariable("serviceId") Integer serviceId,
          @RequestBody ReserveService reserveService) {
      reserveService = reserveServiceRepository.save(reserveService);
      Reservation reservation = reservationRepository.findReservationById(reservationId);
      Service service = serviceRepository.findServiceById(serviceId);
      reserveService.setReservation(reservation);
      reserveService.setService(service);
      return reserveServiceRepository.save(reserveService);
  }



  @GetMapping("/api/reserve_services")
  public List<ReserveService> findAllReserveServices() { return reserveServiceRepository.findAllReserveServices(); }

  @GetMapping("/api/reserve_services/{reserve_servicesId}")
  public ReserveService findReserveServiceById(
          @PathVariable("reserve_servicesId") Integer id) {
    return reserveServiceRepository.findReserveServiceById(id);
  }


  @GetMapping("/api/reservations/{reservationId}/reserve_services")
  public List<ReserveService> findReserveServicesForReservation(
          @PathVariable("reservationId") Integer reservationId) {
      Reservation reservation = reservationRepository.findById(reservationId).get();
      return reservation.getReserveServices();
  }

  @GetMapping("/api/services/{serviceId}/reserve_services")
  public List<ReserveService> findReserveServicesForService(
          @PathVariable("serviceId") Integer serviceId) {
    Service service = serviceRepository.findById(serviceId).get();
    return service.getReserveServices();

  }

  @DeleteMapping("/api/reserve_services/{reserve_servicesId}")
  public void deleteReserveService(
          @PathVariable("reserve_servicesId") Integer id) {
    reserveServiceRepository.deleteById(id);
  }

}
