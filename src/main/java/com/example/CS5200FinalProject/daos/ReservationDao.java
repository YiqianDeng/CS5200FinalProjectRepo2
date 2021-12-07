package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Reservation;
import com.example.CS5200FinalProject.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReservationDao {

    @Autowired
    ReservationRepository repository;

    @PostMapping("/api/reservations")
    public Reservation createReservation(@RequestBody Reservation reservation) {
        return repository.save(reservation);
    }

    @GetMapping("/api/reservations")
    public List<Reservation> findAllReservations() {
        return (List<Reservation>) repository.findAll();
    }

    @GetMapping("/api/reservations/{id}")
    public Reservation findReservationById(@PathVariable("id") Integer id) {
        return repository.findReservationById(id);
    }

    @PutMapping("/api/reservations/{id}")
    public Reservation updateReservation(
            @PathVariable("id") Integer id,
            @RequestBody Reservation reservationUpdate) {
        Reservation reservation = repository.findReservationById(id);
        reservation.setReserveServices(reservationUpdate.getReserveServices());
        reservation.setVet(reservationUpdate.getVet());
        reservation.setPet(reservationUpdate.getPet());
        reservation.setTime(reservationUpdate.getTime());
        return repository.save(reservation);
    }

    @DeleteMapping("api/reservations/{id}")
    public void deleteReservation(
            @PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
