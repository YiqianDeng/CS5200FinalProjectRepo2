package com.example.CS5200FinalProject.repositories;

import com.example.CS5200FinalProject.models.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Integer> {

    @Query("SELECT reservation FROM Reservation reservation")
    public List<Reservation> findAllReservations();

    @Query("SELECT reservation FROM Reservation reservation WHERE reservation.id=:id")
    public Reservation findReservationById(@Param("id") Integer id);
}
