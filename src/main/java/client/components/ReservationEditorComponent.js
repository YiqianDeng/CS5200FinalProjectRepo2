import reservationService from "../services/ReservationService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ReservationEditorComponent = () => {
    const {id} = useParams()
    const [reservation, setReservation] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findReservationById(id)
        }
    }, []);

    const createReservation = (reservation) =>
        reservationService.createReservation(reservation)
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
            <label>Vet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReservation(reservation =>
                           ({...reservation, vet: e.target.value}))}
                   value={reservation.vet}/>
            <label>Pet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReservation(reservation =>
                           ({...reservation, pet: e.target.value}))}
                   value={reservation.pet}/>
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
                    onClick={() => createReservation(reservation)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateReservation(reservation.id, reservation)}>
                Save
            </button>
        </div>
    )
}

export default ReservationEditorComponent
