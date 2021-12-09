import serviceService from "../services/ServiceService";
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ServiceListComponent = () => {

    const history = useHistory()
    const [services, setServices] = useState([])

    useEffect(() => {
        findAllServices()
    }, [])

    const findAllServices = () =>
        serviceService.findAllServices()
            .then(services => setServices(services))


    return(
        <div className="container">
            <h2>Services List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/services/new")}>
                Add Service
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Name</div>
                        <div className="col-sm-2">Cost</div>
                    </div>
                </li>
            {
                services.map(service =>

                    <li className="list-group-item"
                        key={service.id}>
                        <Link to={`/services/${service.id}`}>
                            <div className="form-group row">
                                <div className="col-sm-2">{service.id}</div>
                                <div className="col-sm-2">{service.name}</div>
                                <div className="col-sm-2">{service.cost}</div>
                            </div>
                        </Link>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default ServiceListComponent;
