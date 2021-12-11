package com.example.CS5200FinalProject.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="reserve_service")
public class ReserveService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JsonIgnore
    Service service;

    @ManyToOne
    @JsonIgnore
    Reservation reservation;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Service getService() {
        return service;
    }

    @Transient
    public Integer getServiceId() {
        return service.getId();
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Reservation getReservation() {
        return reservation;
    }

    @Transient
    public Integer getReservationId() {
        return reservation.getId();
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public ReserveService() {
    }

    public ReserveService(Service service, Reservation reservation) {
        this.reservation = reservation;
        this.service = service;
    }
}
