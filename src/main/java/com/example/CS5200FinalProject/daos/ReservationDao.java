package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Pet;
import com.example.CS5200FinalProject.models.Reservation;
import com.example.CS5200FinalProject.models.Vet;
import com.example.CS5200FinalProject.repositories.PetRepository;
import com.example.CS5200FinalProject.repositories.ReservationRepository;
import com.example.CS5200FinalProject.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReservationDao {

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    VetRepository vetRepository;

    @Autowired
    PetRepository petRepository;

    @PostMapping("/api/pets/{petId}/vets/{vetId}/reservations")
    public Reservation createReservation(
            @PathVariable("petId") Integer petId,
            @PathVariable("vetId") Integer vetId,
            @RequestBody Reservation reservation) {
        reservation = reservationRepository.save(reservation);
        Pet pet = petRepository.findPetById(petId);
        Vet vet = vetRepository.findVetById(vetId);
        reservation.setPet(pet);
        reservation.setVet(vet);
        return reservationRepository.save(reservation);
    }

    @GetMapping("/api/reservations")
    public List<Reservation> findAllReservations() {
        return (List<Reservation>) reservationRepository.findAll();
    }

    @GetMapping("/api/reservations/{id}")
    public Reservation findReservationById(@PathVariable("id") Integer id) {
        return reservationRepository.findReservationById(id);
    }

    @GetMapping("/api/pets/{petId}/reservations")
    public List<Reservation> findReservationsForPet(
            @PathVariable("petId") Integer petId) {
        Pet pet = petRepository.findById(petId).get();
        return pet.getReservations();
    }

    @GetMapping("/api/vets/{vetId}/reservations")
    public List<Reservation> findReservationsForVet(
            @PathVariable("vetId") Integer vetId) {
        Vet vet = vetRepository.findById(vetId).get();
        return vet.getReservations();
    }

    @PutMapping("/api/reservations/{id}")
    public Reservation updateReservation(
            @PathVariable("id") Integer id,
            @RequestBody Reservation reservationUpdate) {
        Reservation reservation = reservationRepository.findReservationById(id);
        reservation.setTime(reservationUpdate.getTime());
        return reservationRepository.save(reservation);
    }

    @DeleteMapping("api/reservations/{id}")
    public void deleteReservation(
            @PathVariable("id") Integer id) {
        reservationRepository.deleteById(id);
    }
}
