import reserveService from "../services/ReserveServiceService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ReserveServiceEditorComponent = () => {

    const {id} = useParams()
    const [reserveService, setReserveService] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findReserveServiceById(id)
        }
    }, []);

    const createReserveService = (reserveService) =>
        reserveServiceService.createReserveService(reserveService)
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
                   value={reserveService.id}/>
            <label>Reservation</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReserveService(reserveService =>
                                  ({...reserveService, reservation: e.target.value}))}
                   value={reserveService.reservation}/>
            <label>Service</label>
            <input className="form-control"
                   onChange={(e) =>
                       setReserveService(reserveService =>
                                  ({...reserveService, service: e.target.value}))}
                   value={reserveService.service}/>
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
                    onClick={() => createReserveService(reserveService)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateReserveService(reserveService.id, reserveService)}>
                Save
            </button>
        </div>
    )

}

export default ReserveServiceEditorComponent