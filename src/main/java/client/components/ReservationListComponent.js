const {Link, useHistory} = window.ReactRouterDOM;
import reservationService from "../services/ReservationService"
const { useState, useEffect } = React;

const ReservationListComponent = () => {

    const history = useHistory()
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        findAllReservations()
    }, [])

    const findAllReservations = () =>
        reservationService.findAllReservations()
            .then(reservations => setReservations(reservations))

    return(
        <div className="container">
            <h2>Reservations List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/reservations/new")}>
                Add Reservation
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-1">ID</div>
                        <div className="col-sm-2">Vet</div>
                        <div className="col-sm-2">Pet</div>
                        <div className="col-sm-6">Time</div>
                    </div>
                </li>
                {
                    reservations.map(reservation =>

                        <li className="list-group-item"
                            key={reservation.id}>
                            <Link to={`/reservations/${reservation.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-1">{reservation.id}</div>
                                    <div className="col-sm-2">{reservation.vetId}</div>
                                    <div className="col-sm-2">{reservation.petId}</div>
                                    <div className="col-sm-6">{reservation.time}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )



}
export default ReservationListComponent;
