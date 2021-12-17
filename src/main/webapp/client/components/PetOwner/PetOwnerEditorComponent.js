import petOwnerService from "../../services/PetOwnerService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const PetOwnerEditorComponent = () => {
    const {id} = useParams()
    const [petOwner, setPetOwner] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPetOwnerById(id)
        }
    }, []);

    const createPetOwner = (petOwner) =>{
        let date = new Date(petOwner.dateOfBirth);
        date = date.setDate(date.getDate() + 1)
        date = new Date(date)
        petOwner.dateOfBirth = date
        petOwnerService.createPetOwner(petOwner)
            .then(() => history.back())}

    const findPetOwnerById = (id) =>
        petOwnerService.findPetOwnerById(id)
            .then(petOwner => setPetOwner(petOwner))

    const deletePetOwner = (id) =>
        petOwnerService.deletePetOwner(id)
            .then(() => history.back())

    const updatePetOwner = (id, newPetOwner) =>{
        let date = new Date(petOwner.dateOfBirth);
        date = date.setDate(date.getDate() + 1)
        date = new Date(date)
        petOwner.dateOfBirth = date
        petOwnerService.updatePetOwner(id, newPetOwner)
            .then(() => history.back())}

    return (
        <div>
            <h2>PetOwner Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   readOnly
                   value={petOwner.id}/>

            <label>Number of visits</label>

            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, numberOfVisit: e.target.value}))}
                   value={petOwner.numberOfVisit}/>
            <label>First Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, firstName: e.target.value}))}
                   value={petOwner.firstName}/>
            <label>Last Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, lastName: e.target.value}))}
                   value={petOwner.lastName}/>
            <label>Email</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, email: e.target.value}))}
                   value={petOwner.email}/>
            <label>Phone Number</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, phone: e.target.value}))}
                   value={petOwner.phone}/>
            <label>Date of Birth</label>
            <input className="form-control"
                   onChange={(e) =>
                       setPetOwner(petOwner =>
                           ({...petOwner, dateOfBirth: e.target.value}))}
                   value={petOwner.dateOfBirth}/>
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
            <br/>
            <Link to={`/petOwners/${petOwner.id}/pets`}>
                <h2>Pets</h2>
            </Link>
        </div>
    )
}

export default PetOwnerEditorComponent
