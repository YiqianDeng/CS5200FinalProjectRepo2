import availabilityService from "../services/AvailabilityService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const AvailabilityEditorComponent = () => {

    const {id} = useParams()
    const [availability, setAvailability] = useState({})
    let vetId;

    useEffect(() => {
        if(id !== "new") {
            findAvailabilityById(id)
        }
    }, []);

    const createAvailability = (vetId, newAvailability) =>
        availabilityService.createAvailability(vetId, newAvailability)
            .then(() => history.back())

    const findAvailabilityById = (id) =>
        availabilityService.findAvailabilityById(id)
            .then(availability => setAvailability(availability))

    const deleteAvailability = (id) =>
        availabilityService.deleteAvailability(id)
            .then(() => history.back())

    const updateAvailability = (id, newAvailability) =>
        availabilityService.updateAvailability(id, newAvailability)
            .then(() => history.back())

    return (
        <div>
            <h2>Availability Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   readOnly
                   value={availability.id}/>
            <label>Vet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAvailability(availability =>
                           ({...availability, vetId: e.target.value}))}
                   value={availability.vetId}/>
            <label>Date</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAvailability(availability =>
                           ({...availability, date: e.target.value}))}
                   value={availability.date}/>

            <label>Available</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAvailability(availability =>
                           ({...availability, available: e.target.value}))}
                   value={availability.available}/>
            <label>TimeSlot</label>
            <input className="form-control"
                   onChange={(e) =>
                       setAvailability(availability =>
                           ({...availability, timeSlot: e.target.value}))}
                   value={availability.timeSlot}/>
            <label>Pet Owner ID</label>
            <input className="form-control"
                   onChange={(e) =>
                   {vetId = e.target.value}}
                   value={availability.vetId}
            />
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteAvailability(availability.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createAvailability(vetId, availability)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateAvailability(availability.id, availability)}>
                Save
            </button>
            <br/>
            <Link to={`/vets/${availability.vetId}`}>
                <div className="form-group row">
                    <h2>Vet Information</h2>
                </div>
            </Link>
            <br/>
        </div>
    )
}

export default AvailabilityEditorComponent
