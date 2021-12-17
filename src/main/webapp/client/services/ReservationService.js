const RESERVATIONS_URL = "http://localhost:8080/api/reservations"
const PETS_URL = "http://localhost:8080/api/pets"

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

export const findReservationsForPet = (petId) =>
    fetch(`${PETS_URL}/${petId}/reservations`)
        .then(response => response.json())

export const createReservation = (petId, reservation) =>
    fetch(`${PETS_URL}/${petId}/reservations`, {
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
    findReservationsForPet
}
