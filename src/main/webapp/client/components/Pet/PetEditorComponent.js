import petService from "../../services/PetService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const PetEditorComponent = () => {

    const {id} = useParams()
    const [pet, setPet] = useState({})
    let petOwnerId;

    useEffect(() => {
        if(id !== "new") {
            findPetById(id)
        }
    }, []);

    const createPet = (petOwnerId, pet) =>
        petService.createPet(petOwnerId, pet)
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
                   readOnly
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
                   onChange={(e) =>
                   {petOwnerId = e.target.value}}
                   value={pet.petOwnerId}
                   />
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
                    onClick={() => createPet(petOwnerId, pet)}>
                    Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updatePet(pet.id, pet)}>
                    Save
            </button>
            <br/>
            <Link to={`/petOwners/${pet.petOwnerId}`}>
                <div className="form-group row">
                    <h2>Owner Information</h2>
                </div>
            </Link>
            <br/>
            <Link to={`/pets/${pet.id}/reservations`}>
                <h2>Reservations</h2>
            </Link>
            <br/>
            <Link to={`/pets/${pet.id}/histories`}>
                <h2>Histories</h2>
            </Link>

        </div>
    )
}

export default PetEditorComponent
