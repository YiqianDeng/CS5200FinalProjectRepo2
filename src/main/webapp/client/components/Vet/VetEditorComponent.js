import vetService, {findVetById} from "../../services/VetService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const VetEditorComponent = () => {
    const {id} = useParams()
    const [vet, setVet] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findVetById(id)
        }
    }, []);

    const createVet = (vet) =>
        vetService.createVet(vet)
            .then(() => history.back())

    const findVetById = (id) =>
        vetService.findVetById(id)
            .then(vet => setVet(vet))

    const deleteVet = (id) =>
        vetService.deleteVet(id)
            .then(() => history.back())

    const updateVet = (id, newVet) =>
        vetService.updateVet(id, newVet)
            .then(() => history.back())

    return (
        <div>
            <h2>Vet Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   readOnly
                   value={vet.id}/>
            <label>Specialty</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, specialty: e.target.value}))}
                   value={vet.specialty}/>
            <label>Tenure</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, tenure: e.target.value}))}
                   value={vet.tenure}/>
            <label>First Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, firstName: e.target.value}))}
                   value={vet.firstName}/>
            <label>Last Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, lastName: e.target.value}))}
                   value={vet.lastName}/>
            <label>Email</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, email: e.target.value}))}
                   value={vet.email}/>
            <label>Phone Number</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, phone: e.target.value}))}
                   value={vet.phone}/>
            <label>Date of Birth</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, dateOfBirth: e.target.value}))}
                   value={vet.dateOfBirth}/>
            <label>Username</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, username: e.target.value}))}
                   value={vet.username}/>
            <label>Password</label>
            <input className="form-control"
                   onChange={(e) =>
                       setVet(vet =>
                           ({...vet, password: e.target.value}))}
                   value={vet.password}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteVet(vet.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createVet(vet)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateVet(vet.id, vet)}>
                Save
            </button>
            <br/>
            <Link to={`/vets/${vet.id}/availabilities`}>
                <h2>Availabilities</h2>
            </Link>
            <br/>
            <Link to={`/vets/${vet.id}/reservations`}>
                <h2>Reservations</h2>
            </Link>
            <br/>
            <Link to={`/vets/${vet.id}/histories`}>
                <h2>Histories</h2>
            </Link>

        </div>
    )
}

export default VetEditorComponent
