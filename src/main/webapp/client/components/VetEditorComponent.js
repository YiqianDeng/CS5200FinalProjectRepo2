import vetService, {findVetById} from "../services/VetService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

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
                    onClick={() => createVet(Vet)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateVet(vet.id, vet)}>
                Save
            </button>
        </div>
    )
}

export default VetEditorComponent
