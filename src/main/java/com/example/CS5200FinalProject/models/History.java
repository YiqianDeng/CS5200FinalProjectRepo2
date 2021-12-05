package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Time;
import java.util.List;

@Entity
@Table(name="history")
public class History {
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

    @ManyToMany
    @JsonIgnore
    private List<Service> services;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
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

    public History() {
    }

    public History(Vet vet, Pet pet, Time time) {
        this.vet = vet;
        this.pet = pet;
        this.time = time;
    }
}
