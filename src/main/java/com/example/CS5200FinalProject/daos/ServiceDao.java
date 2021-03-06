package com.example.CS5200FinalProject.daos;

import com.example.CS5200FinalProject.models.Service;
import com.example.CS5200FinalProject.repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ServiceDao {

    @Autowired
    ServiceRepository serviceRepository;

    @PostMapping("/api/services")
    public Service createService(@RequestBody Service service) { return serviceRepository.save(service); }

    @GetMapping("/api/services")
    public List<Service> findAllServices() { return serviceRepository.findAllServices(); }

    @GetMapping("/api/services/{serviceId}")
    public Service findServiceById(
            @PathVariable("serviceId") Integer id) {
        return serviceRepository.findServiceById(id);
    }

    @PutMapping("/api/services/{serviceId}")
    public Service updateService(
            @PathVariable("serviceId") Integer id,
            @RequestBody Service serviceUpdates) {
        Service service = serviceRepository.findServiceById(id);
        service.setName(serviceUpdates.getName());
        service.setCost(serviceUpdates.getCost());
        return serviceRepository.save(service);
    }

    @DeleteMapping("/api/services/{serviceId}")
    public void deleteService(
            @PathVariable("serviceId") Integer id) {
        serviceRepository.deleteById(id);
    }
}
