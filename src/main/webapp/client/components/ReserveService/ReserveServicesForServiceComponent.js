import reserveServiceService from "../../services/ReserveServiceService"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const ReserveServicesForServiceComponent = () => {

    const history = useHistory()
    const [reserveServices, setReserveServices] = useState([])
    const {serviceId} = useParams()

    useEffect(() => {
        findReserveServicesForService(serviceId)
    }, [])

    const findReserveServicesForService = (serviceId) =>
        reserveServiceService.findReserveServicesForService(serviceId)
            .then(reserveServices => setReserveServices(reserveServices))

    return(
        <div className="container">
            <h2>Reserve Services List of Service {serviceId}</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Reservation</div>
                    </div>
                </li>
                {
                    reserveServices.map(reserveService =>
                        <li className="list-group-item"
                            key={reserveService.id}>
                            <Link to={`/reserveServices/${reserveService.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{reserveService.id}</div>
                                    <div className="col-sm-2">{reserveService.reservationId}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default ReserveServicesForServiceComponent;
