package com.example.CS5200FinalProject.models;

import javax.persistence.*;
import java.sql.Time;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JsonIgnore
    private Vet vet;

    @ManyToOne
    @JsonIgnore
    private Pet pet;

    private Time time;

    @OneToMany(mappedBy = "reservation")
    @JsonIgnore
    private List<ReserveService> reserveServices;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<ReserveService> getReserveServices() {
        return reserveServices;
    }

    public void setReserveServices(List<ReserveService> reserveServices) {
        this.reserveServices = reserveServices;
    }

    public Vet getVet() {
        return vet;
    }

    public void setVet(Vet vet) {
        this.vet = vet;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Reservation() {
    }

    public Reservation(Vet vet, Pet pet, Time time) {
        this.vet = vet;
        this.pet = pet;
        this.time = time;
    }
}
