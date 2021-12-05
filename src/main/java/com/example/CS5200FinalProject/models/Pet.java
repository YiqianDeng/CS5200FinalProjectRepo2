package com.example.CS5200FinalProject.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="pet")
public class Pet {

    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JsonIgnore
    private PetOwner petOwner;
    private String category;
    private int age;

    @OneToMany
    @JsonIgnore
    private List<Reservation> reservations;

    @OneToMany
    @JsonIgnore
    private List<History> histories;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PetOwner getPetOwner() {
        return petOwner;
    }

    public void setPetOwner(PetOwner petOwner) {
        this.petOwner = petOwner;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public Pet() {
    }

    public Pet(PetOwner petOwner, String category, int age) {
        this.petOwner = petOwner;
        this.category = category;
        this.age = age;
    }
}
