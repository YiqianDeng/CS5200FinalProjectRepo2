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

    @Transient
    public Integer getServiceId() {
        return service.getId();
    }

    public void setService(Service service) {
        this.service = service;
    }

    public History getHistory() {
        return history;
    }

    @Transient
    public Integer getHistoryId() {
        return history.getId();
    }

    public void setHistory(History history) {
        this.history = history;
    }
}
