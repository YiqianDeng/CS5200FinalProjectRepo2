import historyServiceService from "../services/HistoryServiceService"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const HistoryServicesForServiceComponent = () => {

    const history = useHistory()
    const [historyServices, setHistoryServices] = useState([])
    const {serviceId} = useParams()

    useEffect(() => {
        findHistoryServicesForService(serviceId)
    }, [])

    const findHistoryServicesForService = (serviceId) =>
        historyServiceService.findHistoryServicesForService(serviceId)
            .then(historyServices => setHistoryServices(historyServices))

    return(
        <div className="container">
            <h2>History Services List of Service {serviceId}</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">History</div>
                    </div>
                </li>
                {
                    historyServices.map(historyService =>
                                            <li className="list-group-item"
                                                key={historyService.id}>
                                                <Link to={`/historyServices/${historyService.id}`}>
                                                    <div className="form-group row">
                                                        <div className="col-sm-2">{historyService.id}</div>
                                                        <div className="col-sm-2">{historyService.historyId}</div>
                                                    </div>
                                                </Link>
                                            </li>)
                }
            </ul>
        </div>
    )

}

export default HistoryServicesForServiceComponent;