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
    private String species;
    private int age;

    @OneToMany(mappedBy = "pet")
    @JsonIgnore
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "pet")
    @JsonIgnore
    private List<History> histories;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Transient
    public Integer getPetOwnerId() {
        return petOwner.getId();
    }

    public PetOwner getPetOwner() {
        return petOwner;
    }

    public void setPetOwner(PetOwner petOwner) {
        this.petOwner = petOwner;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
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
}
