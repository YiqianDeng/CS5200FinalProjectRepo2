import reservationService from "../services/ReservationService";
const { useState, useEffect } = React;
const {Link, useParam, useHistory} = window.ReactRouterDOM;


const ReservationsForPetComponent = () => {

    const history = useHistory()
    const [reservations, setReservations] = useState([])
    const {petId} = useParams()


    useEffect(() => {
        findReservationsForPet(petId)
    }, [])


    const findReservationsForPet = (petId) =>
        reservationService.findReservationsForPet(petId)
            .then(reservations => setReservations(reservations))

    return(
        <div className="container">
            <h2>Reservations List of Pet {petId}</h2>

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

export default ReservationsForPetComponent;
