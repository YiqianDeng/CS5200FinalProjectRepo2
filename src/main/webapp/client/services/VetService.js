const VETS_URL = "http://localhost:8080/api/vets"

export const findAllVets = () =>
    fetch(VETS_URL)
        .then(response => response.json())

export const findVetById = (id) =>
    fetch(`${VETS_URL}/${id}`)
        .then(response => response.json())

export const deleteVet = (id) =>
    fetch(`${VETS_URL}/${id}`, {
        method: "DELETE"
    })

export const createVet = (vet) =>
    fetch(VETS_URL, {
        method: 'POST',
        body: JSON.stringify(vet),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updateVet = (id, vet) =>
    fetch(`${VETS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(vet),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
    findAllVets,
    findVetById,
    deleteVet,
    createVet,
    updateVet
}
