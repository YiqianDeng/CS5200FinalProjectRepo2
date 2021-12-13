import petOwnerService from "../services/PetOwnerService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const PetOwnerEditorComponent = () => {
    const {id} = useParams()
    const [petOwner, setPetOwner] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPetOwnerById(id)
        }
    }, []);

    const createPetOwner = (petOwner) =>
        petOwnerService.createPetOwner(petOwner)
            .then(() => history.back())

    const findPetOwnerById = (id) =>
        petOwnerService.findPetOwnerById(id)
            .then(petOwner => setPetOwner(petOwner))

    const deletePetOwner = (id) =>
        petOwnerService.deletePetOwner(id)
            .then(() => history.back())

    const updatePetOwner = (id, newPetOwner) =>
        petOwnerService.updatePetOwner(id, newPetOwner)
            .then(() => history.back())

    return (
        <div>
            <h2>PetOwner Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={petOwner.id}/>

            <label>Number of visits</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, numberOfVisit: e.target.value}))}
                   value={petOwner.numberOfVisit}/>
            <br/>

            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deletePetOwner(petOwner.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createPetOwner(petOwner)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updatePetOwner(petOwner.id, petOwner)}>
                Save
            </button>

            <h2>Pets List of This Owner</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Age</div>
                        <div className="col-sm-2">Species</div>
                    </div>
                </li>
                {
                    petOwner.pets.map(pet =>
                        <li className="list-group-item"
                            key={pet.id}>
                            <Link to={`/pets/${pet.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{pet.id}</div>
                                    <div className="col-sm-2">{pet.age}</div>
                                    <div className="col-sm-2">{pet.species}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PetOwnerEditorComponent
