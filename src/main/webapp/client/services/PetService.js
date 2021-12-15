const PETS_URL = "http://localhost:8080/api/pets"
const PETOWNERS_URL = "http://localhost:8080/api/petOwners"

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

export const findPetsForPetOwner = (petOwnerId) =>
    fetch(`${PETOWNERS_URL}/${petOwnerId}/pets`)
        .then(response => response.json())

export const createPet = (petOwnerId, pet) =>
    fetch(`${PETOWNERS_URL}/${petOwnerId}/pets`, {
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
    updatePet,
    findPetsForPetOwner
}
