import reserveServiceService from "../../services/ReserveServiceService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ReserveServiceEditorComponent = () => {

    const {id} = useParams()
    const [reserveService, setReserveService] = useState({})
    let serviceId;
    useEffect(() => {
        if(id !== "new") {
            findReserveServiceById(id)
        }
    }, []);

    const createReserveService = (serviceId, reserveService) =>
        reserveServiceService.createReserveService(serviceId, reserveService)
            .then(() => history.back())

    const findReserveServiceById = (id) =>
        reserveServiceService.findReserveServiceById(id)
            .then(reserveService => setReserveService(reserveService))

    const deleteReserveService = (id) =>
        reserveServiceService.deleteReserveService(id)
            .then(() => history.back())

    const updateReserveService = (id, newReserveService) =>
        reserveServiceService.updateReserveService(id, newReserveService)
            .then(() => history.back())

    return (
        <div>
            <h2>Reserve Service Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   readOnly
                   value={reserveService.id}/>
            <label>Reservation ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReserveService(reserveService =>
                                  ({...reserveService, reservationId: e.target.value}))}
                   value={reserveService.reservationId}/>
            <label>Service ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       // setReserveService(reserveService =>
                       //            ({...reserveService, serviceId: e.target.value}))}
                   {serviceId = e.target.value}}
                   value={reserveService.serviceId}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteReserveService(reserveService.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createReserveService(serviceId, reserveService)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateReserveService(reserveService.id, reserveService)}>
                Save
            </button>
            <br/>
            <Link to={`/reservations/${reserveService.reservationId}`}>
                <div className="form-group row">
                    <h2>Reservation Information</h2>
                </div>
            </Link>
            <Link to={`/services/${reserveService.serviceId}`}>
                <div className="form-group row">
                    <h2>Service Information</h2>
                </div>
            </Link>
        </div>
    )

}

export default ReserveServiceEditorComponent
