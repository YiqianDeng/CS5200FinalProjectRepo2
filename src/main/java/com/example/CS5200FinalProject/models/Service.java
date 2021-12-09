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
//    private ServiceName name;

    private String name;
    private double cost;

    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private List<ReserveService> reserveServices;

    @OneToMany(mappedBy = "service")
    @JsonIgnore
    private List<HistoryService> historyServices;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

//    public ServiceName getName() {
//        return name;
//    }
//
//    public void setName(ServiceName name) {
//        this.name = name;
//    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public List<ReserveService> getReserveServices() {
        return reserveServices;
    }

    public void setReserveServices(List<ReserveService> reserveServices) {
        this.reserveServices = reserveServices;
    }

    public List<HistoryService> getHistoryServices() {
        return historyServices;
    }

    public void setHistoryServices(List<HistoryService> historyServices) {
        this.historyServices = historyServices;
    }

    public Service() {
    }

    public Service(String name, double cost) {
        this.name = name;
        this.cost = cost;
    }
}
