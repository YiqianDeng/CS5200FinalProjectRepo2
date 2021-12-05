package com.example.CS5200FinalProject.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class HistoryService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JsonIgnore
    Service service;

    @ManyToOne
    @JsonIgnore
    History history;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public History getHistory() {
        return history;
    }

    public void setHistory(History history) {
        this.history = history;
    }

    public HistoryService() {
    }

    public HistoryService(Service service, History history) {
        this.history = history;
        this.service = service;
    }
}
