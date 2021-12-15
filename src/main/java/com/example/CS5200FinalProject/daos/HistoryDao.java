package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.History;
import com.example.CS5200FinalProject.models.Pet;
import com.example.CS5200FinalProject.models.Vet;
import com.example.CS5200FinalProject.repositories.HistoryRepository;
import com.example.CS5200FinalProject.repositories.PetRepository;
import com.example.CS5200FinalProject.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class HistoryDao {

    @Autowired
    HistoryRepository historyRepository;

    @Autowired
    VetRepository vetRepository;

    @Autowired
    PetRepository petRepository;

    @PostMapping("/api/pets/{petId}/vets/{vetId}/histories")
    public History createHistory(
            @PathVariable("petId") Integer petId,
            @PathVariable("vetId") Integer vetId,
            @RequestBody History history) {
        history =  historyRepository.save(history);
        Pet pet = petRepository.findPetById(petId);
        Vet vet = vetRepository.findVetById(vetId);
        history.setPet(pet);
        history.setVet(vet);
        return historyRepository.save(history);
    }

    @GetMapping("/api/histories")
    public List<History> findAllHistories() {
        return (List<History>) historyRepository.findAll();
    }

    @GetMapping("/api/histories/{id}")
    public History findHistoryById(@PathVariable("id") Integer id) {
        return historyRepository.findHistoriesById(id);
    }

    @PutMapping("/api/histories/{id}")
    public History updateHistory(
            @PathVariable("id") Integer id,
            @RequestBody History historyUpdate) {
        History history = historyRepository.findHistoriesById(id);
        history.setTime(historyUpdate.getTime());
        return historyRepository.save(history);
    }

    @DeleteMapping("api/histories/{id}")
    public void deleteHistory(
            @PathVariable("id") Integer id) {
        historyRepository.deleteById(id);
    }
}
