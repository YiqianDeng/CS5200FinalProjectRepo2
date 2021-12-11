import reserveServiceService from "../services/ReserveServiceService";

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ReserveServiceListComponent = () => {

    const history = useHistory()
    const [reserveServices, setReserveServices] = useState([])

    useEffect(() => {
        findAllReserveServices()
    }, [])

    const findAllReserveServices = () =>
        reserveServiceService.findAllReserveServices()
            .then(reserveServices => setReserveServices(reserveServices))

    return(
        <div className="container">
            <h2>Reserve Service List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/reserve_services/new")}>
                Add Reserve Service
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Service</div>
                        <div className="col-sm-2">Reservation</div>
                    </div>
                </li>
                {
                    reserveServices.map(reserveService =>

                         <li className="list-group-item"
                             key={reserveService.id}>
                             <Link to={`/reserve_services/${reserveService.id}`}>
                                 <div className="form-group row">
                                     <div className="col-sm-2">{reserveService.id}</div>
                                     <div className="col-sm-2">{reserveService.serviceId}</div>
                                     <div className="col-sm-2">{reserveService.reservationId}</div>
                                 </div>
                             </Link>
                         </li>)
                }
            </ul>
        </div>
    )
}

export default ReserveServiceListComponent;
