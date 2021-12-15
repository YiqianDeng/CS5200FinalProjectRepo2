package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="pet_owner")
public class PetOwner extends People{
    private int numberOfVisit;

    @OneToMany(mappedBy = "petOwner")
    @JsonIgnore
    private List<Pet> pets;

    public int getNumberOfVisit() {
        return numberOfVisit;
    }

    public void setNumberOfVisit(int number_of_visit) {
        this.numberOfVisit = number_of_visit;
    }

    public List<Pet> getPets() {
        return pets;
    }

    public void setPets(List<Pet> pets) {
        this.pets = pets;
    }
}
