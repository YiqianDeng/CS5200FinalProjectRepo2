package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="availability")
public class Availability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private boolean available;
    private Date date;
    private String timeSlot;

    @ManyToOne
    @JsonIgnore
    private Vet vet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String time_slot) {
        this.timeSlot = time_slot;
    }

    public Vet getVet() {
        return vet;
    }

    public void setVet(Vet vet) {
        this.vet = vet;
    }

    public Integer getVetId(){
        return vet.getId();
    }

    public Availability() {
    }

    public Availability(boolean available, Date date, String time_slot, Vet vet) {
        this.available = available;
        this.date = date;
        this.timeSlot = time_slot;
        this.vet = vet;
    }
}
