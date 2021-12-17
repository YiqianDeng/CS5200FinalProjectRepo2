const RESERVESERVICES_URL = "http://localhost:8080/api/reserve_services"
const RESERVATIONS_URL = "http://localhost:8080/api/reservations"

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

export const findReserveServicesForReservation = (reservationId) =>
    fetch(`${RESERVATIONS_URL}/${reservationId}/reserve_services`)
        .then(response => response.json())

export const createReserveService = (reservationId, reserveService) =>
    fetch(`${RESERVATIONS_URL}/${reservationId}/reserve_services`, {
        method: 'POST',
        body: JSON.stringify(reserveService),
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
    findReserveServicesForReservation
}
