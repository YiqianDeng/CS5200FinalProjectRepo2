const PETS_URL = "http://localhost:8080/api/pets"

export const findAllPets = () =>
    fetch(PETS_URL)
        .then(response => response.json())

export const findPetById = (id) =>
    fetch(`${PETS_URL}/${id}`)
        .then(response => response.json())

export const deletePet = (id) =>
    fetch(`${PETS_URL}/${id}`, {
        method: "DELETE"
    })

export const createPet = (pet) =>
    fetch(PETS_URL, {
        method: 'POST',
        body: JSON.stringify(pet),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const updatePet = (id, pet) =>
    fetch(`${PETS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(pet),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export default {
    findAllPets,
    findPetById,
    deletePet,
    createPet,
    updatePet
}
