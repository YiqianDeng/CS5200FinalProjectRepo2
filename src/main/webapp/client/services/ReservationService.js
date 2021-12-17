const RESERVATIONS_URL = "http://localhost:8080/api/reservations"
const VETS_URL = "http://localhost:8080/api/vets"

export const findAllReservations = () =>
    fetch(RESERVATIONS_URL)
        .then(response => response.json())

export const findReservationById = (id) =>
    fetch(`${RESERVATIONS_URL}/${id}`)
        .then(response => response.json())

export const deleteReservation = (id) =>
    fetch(`${RESERVATIONS_URL}/${id}`, {
        method: "DELETE"
    })
export const findReservationsForVet = (vetId) =>
    fetch(`${VETS_URL}/${vetId}/reservations`)
        .then(response => response.json())

export const createReservation = (vetId,reservation) =>
    fetch(`${RESERVATIONS_URL}/${vetId}/pets`, {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateReservation = (id, reservation) =>
    fetch(`${RESERVATIONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(reservation),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllReservations,
    findReservationById,
    deleteReservation,
    createReservation,
    updateReservation,
    findReservationsForVet
}
