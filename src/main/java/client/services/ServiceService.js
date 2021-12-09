const SERVICES_URL = "http://localhost:8080/api/services"

export const findAllServices = () =>
    fetch(SERVICES_URL)
        .then(response => response.json())

export const findServiceById = (id) =>
    fetch(`${SERVICES_URL}/${id}`)
        .then(response => response.json())

export const deleteService = (id) =>
    fetch(`${SERVICES_URL}/${id}`, {
        method: "DELETE"
    })

export const createService = (service) =>
    fetch(SERVICES_URL, {
        method: 'POST',
        body: JSON.stringify(service),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateService = (id, service) =>
    fetch(`${SERVICES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(service),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllServices,
    findServiceById,
    deleteService,
    createService,
    updateService
}
