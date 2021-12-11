import historyServiceService from "../services/HistoryServiceService";

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const HistoryServiceListComponent = () => {
    const history = useHistory()
    const [historyServices, setHistoryServices] = useState([])

    useEffect(() => {
        findAllHistoryServices()
    }, [])

    const findAllHistoryServices = () =>
        historyServiceService.findAllHistoryServices()
            .then(historyServices => setHistoryServices(historyServices))

    return(
        <div className="container">
            <h2>History Service List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/history_services/new")}>
                Add History Service
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Service</div>
                        <div className="col-sm-2">History</div>
                    </div>
                </li>
                {
                    historyServices.map(historyService =>

                        <li className="list-group-item"
                            key={historyService.id}>
                            <Link to={`/history_services/${historyService.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{historyService.id}</div>
                                    <div className="col-sm-2">{historyService.serviceId}</div>
                                    <div className="col-sm-2">{historyService.historyId}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )

}

export default HistoryServiceListComponent
