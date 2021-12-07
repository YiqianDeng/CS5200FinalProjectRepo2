package com.example.CS5200FinalProject.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="pet_owner")
@PrimaryKeyJoinColumn(name = "id")
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

    public PetOwner() {
    }

    public PetOwner(String first_name, String last_name, String email, String phone, Date date_of_birth, String username, String password, int number_of_visit) {
        super(first_name, last_name, email, phone, date_of_birth, username, password);
        this.numberOfVisit = number_of_visit;
    }
}
