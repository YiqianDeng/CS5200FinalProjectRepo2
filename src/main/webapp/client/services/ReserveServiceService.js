const RESERVESERVICES_URL = "http://localhost:8080/api/reserve_services"
const SERVICES_URL = "http://localhost:8080/api/services"

export const findAllReserveServices = () =>
    fetch(RESERVESERVICES_URL)
        .then(response => response.json())

export const findReserveServiceById = (id) =>
    fetch(`${RESERVESERVICES_URL}/${id}`)
        .then(response => response.json())

export const deleteReserveService = (id) =>
    fetch(`${RESERVESERVICES_URL}/${id}`, {
        method: "DELETE"
    })

export const findReserveServicesForService = (serviceId) =>
    fetch(`${SERVICES_URL}/${serviceId}/reserve_services`)
        .then(response => response.json())

export const createReservation = (reservation) =>
    fetch(RESERVATIONS_URL, {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateReserveService = (id, reserveService) =>
    fetch(`${RESERVESERVICES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(reserveService),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllReserveServices,
    findReserveServiceById,
    deleteReserveService,
    createReserveService,
    updateReserveService,
    findReserveServicesForService
}
