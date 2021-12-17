import reservationService from "../services/ReservationService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const ReservationEditorComponent = () => {
    const {id} = useParams()
    const [reservation, setReservation] = useState({})
    let vetId;

    useEffect(() => {
        if(id !== "new") {
            findReservationById(id)
        }
    }, []);

    const createReservation = (vetId, reservation) =>
        reservationService.createReservation(vetId, reservation)
            .then(() => history.back())

    const findReservationById = (id) =>
        reservationService.findReservationById(id)
            .then(reservation => setReservation(reservation))

    const deleteReservation = (id) =>
        reservationService.deleteReservation(id)
            .then(() => history.back())

    const updateReservation = (id, newReservation) =>
        reservationService.updateReservation(id, newReservation)
            .then(() => history.back())

    return (
        <div>
            <h2>Reservation Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={reservation.id}/>
            <label>Vet ID</label>
            <input className="form-control"
                   onChange={(e) =>
                   {vetId: e.target.value}}
                   value={reservation.vetId}/>
            <label>Pet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReservation(reservation =>
                           ({...reservation, pet: e.target.value}))}
                   value={reservation.petId}/>
            <label>Time</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReservation(reservation =>
                           ({...reservation, time: e.target.value}))}
                   value={reservation.time}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteReservation(reservation.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createReservation(vetId,reservation)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateReservation(reservation.id, reservation)}>
                Save
            </button>
            <br/>
            <Link to={`/vets/${reservation.vetId}`}>
                <div className="form-group row">
                    <h2>Vet Information</h2>
                </div>
            </Link>
        </div>
    )
}

export default ReservationEditorComponent
