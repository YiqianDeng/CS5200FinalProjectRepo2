const PETOWNERS_URL = "http://localhost:8080/api/petOwners"

export const findAllPetOwners = () =>
    fetch(PETOWNERS_URL)
        .then(response => response.json())

export const findPetOwnerById = (id) =>
    fetch(`${PETOWNERS_URL}/${id}`)
        .then(response => response.json())

export const deletePetOwner = (id) =>
    fetch(`${PETOWNERS_URL}/${id}`, {
        method: "DELETE"
    })

export const createPetOwner = (petOwner) =>
    fetch(PETOWNERS_URL, {
        method: 'POST',
        body: JSON.stringify(petOwner),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePetOwner = (id, petOwner) =>
    fetch(`${PETOWNERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(petOwner),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export default {
    findAllPetOwners,
    findPetOwnerById,
    deletePetOwner,
    createPetOwner,
    updatePetOwner
}
