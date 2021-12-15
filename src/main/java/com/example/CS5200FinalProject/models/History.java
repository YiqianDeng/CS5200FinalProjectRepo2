package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
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

    private Timestamp time;

    @OneToMany(mappedBy = "history")
    @JsonIgnore
    private List<HistoryService> historyServices;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<HistoryService> getHistoryServices() {
        return historyServices;
    }

    public void setHistoryServices(List<HistoryService> historyServices) {
        this.historyServices = historyServices;
    }

    public Vet getVet() {
        return vet;
    }

    public void setVet(Vet vet) {
        this.vet = vet;
    }

    @Transient
    public Integer getVetId() {
        return vet.getId();
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    @Transient
    public Integer getPetId() {
        return pet.getId();
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }
}
