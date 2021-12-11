package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="vet")
//@PrimaryKeyJoinColumn(name = "id")
public class Vet extends People {

    private String specialty;
    private int tenure;

    @OneToMany(mappedBy = "vet")
    @JsonIgnore
    private List<Availability> availabilities;

    @OneToMany(mappedBy = "vet")
    @JsonIgnore
    private List<History> histories;

    @OneToMany(mappedBy = "vet")
    @JsonIgnore
    private List<Reservation> reservations;

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }

    public List<Availability> getAvailabilities() {
        return availabilities;
    }

    public void setAvailabilities(List<Availability> availabilities) {
        this.availabilities = availabilities;
    }

    public List<History> getHistories() {
        return histories;
    }

    public void setHistories(List<History> histories) {
        this.histories = histories;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public Vet() {
    }

    public Vet(String first_name, String last_name, String email, String phone, Date date_of_birth, String username, String password, String specialty, int tenure) {
        super(first_name, last_name, email, phone, date_of_birth, username, password);
        this.specialty = specialty;
        this.tenure = tenure;
    }
}
