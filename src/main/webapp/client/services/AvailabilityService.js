const AVAILABILITIES_URL = "http://localhost:8080/api/availabilities"

export const findAllAvailabilities = () =>
    fetch(AVAILABILITIES_URL)
        .then(response => response.json())

export const findAvailabilityById = (id) =>
    fetch(`${AVAILABILITIES_URL}/${id}`)
        .then(response => response.json())

export const deleteAvailability = (id) =>
    fetch(`${AVAILABILITIES_URL}/${id}`, {
        method: "DELETE"
    })

export const createAvailability = (availability) =>
    fetch(AVAILABILITIES_URL, {
        method: 'POST',
        body: JSON.stringify(availability),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updateAvailability = (id, availability) =>
    fetch(`${AVAILABILITIES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(availability),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllAvailabilities,
    findAvailabilityById,
    deleteAvailability,
    createAvailability,
    updateAvailability
}
