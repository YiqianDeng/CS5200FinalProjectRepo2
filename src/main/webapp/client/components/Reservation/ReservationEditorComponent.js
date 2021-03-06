import reservationService from "../../services/ReservationService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const ReservationEditorComponent = () => {
    const {id} = useParams()
    const [reservation, setReservation] = useState({})
    let petId;
    let vetId;

    useEffect(() => {
        if(id !== "new") {
            findReservationById(id)
        }
    }, []);

    const createReservation = (petId, vetId, reservation) =>{
        reservationService.createReservation(petId, vetId, reservation)
            .then(() => history.back())}

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
                   readOnly
                   value={reservation.id}/>
            <label>Time</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReservation(reservation =>
                           ({...reservation, time: e.target.value}))}
                   value={reservation.time}/>
            <label>Vet</label>
            <input className="form-control"
                   onChange={(e) =>
                   {vetId = e.target.value}}
                   value={reservation.vetId}/>
            <label>Pet</label>
            <input className="form-control"
                   onChange={(e) =>
                   {petId =  e.target.value}}
                   value={reservation.petId}/>
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
                    onClick={() => createReservation(petId, vetId, reservation)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateReservation(reservation.id, reservation)}>
                Save
            </button>
            <br/>

            <Link to={`/pets/${reservation.petId}`}>
                <div className="form-group row">
                    <h2>Pet Information</h2>
                </div>
            </Link>
            <Link to={`/reservations/${reservation.id}/reserve_services`}>
                <h2>ReserveServices</h2>
            </Link>

            <Link to={`/vets/${reservation.vetId}`}>
                <div className="form-group row">
                    <h2>Vet Information</h2>
                </div>
            </Link>
        </div>
    )
}

export default ReservationEditorComponent
