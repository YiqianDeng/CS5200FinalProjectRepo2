import petService from "../services/PetService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const PetEditorComponent = () => {
    const {id} = useParams()
    const [pet, setPet] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPetById(id)
        }
    }, []);

    const createPet = (pet) =>
        petService.createPet(pet)
            .then(() => history.back())

    const findPetById = (id) =>
        petService.findPetById(id)
            .then(pet => setPet(pet))

    const deletePet = (id) =>
        petService.deletePet(id)
            .then(() => history.back())

    const updatePet = (id, newPet) =>
        petService.updatePet(id, newPet)
            .then(() => history.back())

    return (
        <div>
            <h2>Pet Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={pet.id}/>
            <label>Age</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPet(pet =>
                           ({...pet, age: e.target.value}))}
                   value={pet.age}/>
            <label>Species</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPet(pet =>
                           ({...pet, species: e.target.value}))}
                   value={pet.species}/>
            <label>Pet Owner ID</label>
            <input className="form-control"
                   value={pet.petOwnerId}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                    Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deletePet(pet.id)}>
                    Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createPet(pet)}>
                    Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updatePet(pet.id, pet)}>
                    Save
            </button>
        </div>
    )
}

export default PetEditorComponent
