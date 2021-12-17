import serviceService from "../services/ServiceService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ServiceEditorComponent = () => {

    const {id} = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findServiceById(id)
        }
    }, []);

    const createService = (service) =>
        serviceService.createService(service)
            .then(() => history.back())

    const findServiceById = (id) =>
        serviceService.findServiceById(id)
            .then(service => setService(service))

    const deleteService = (id) =>
        serviceService.deleteService(id)
            .then(() => history.back())

    const updateService = (id, newService) =>
        serviceService.updateService(id, newService)
            .then(() => history.back())

    return (
        <div>
            <h2>Service Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={service.id}/>
            <label>Name</label>
            <input className="form-control"
                   onChange={(e) =>
                       setService(service =>
                           ({...service, name: e.target.value}))}
                   value={service.name}/>
            <label>Cost</label>
            <input className="form-control"
                   onChange={(e) =>
                       setService(service =>
                           ({...service, cost: e.target.value}))}
                   value={service.cost}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteService(service.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createService(service)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateService(service.id, service)}>
                Save
            </button>
            <br/>
            <Link to={`/services/${service.id}/history_services`}>
                <h2>History Services</h2>
            </Link>
            <Link to={`/services/${service.id}/reserve_services`}>
                <h2>Reserve Services</h2>
            </Link>
        </div>
    )
}

export default ServiceEditorComponent
