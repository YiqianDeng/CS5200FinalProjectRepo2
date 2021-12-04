package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="service")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private ServiceName name;
    private double cost;

    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private List<History> histories;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ServiceName getName() {
        return name;
    }

    public void setName(ServiceName name) {
        this.name = name;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<History> getHistories() {
        return histories;
    }

    public void setHistories(List<History> histories) {
        this.histories = histories;
    }

    public Service() {
    }

    public Service(ServiceName name, double cost) {
        this.name = name;
        this.cost = cost;
    }
}
