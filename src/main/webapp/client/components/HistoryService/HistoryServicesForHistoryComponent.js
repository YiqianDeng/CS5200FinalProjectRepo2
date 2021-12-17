import historyServiceService from "../../services/HistoryServiceService"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const HistoryServicesForHistoryComponent = () => {

    const history = useHistory()
    const [historyServices, setHistoryServices] = useState([])
    const {historyId} = useParams()

    useEffect(() => {
        findHistoryServicesForHistory(historyId)
    }, [])

    const findHistoryServicesForHistory = (historyId) =>
        historyServiceService.findHistoryServicesForHistory(historyId)
            .then(historyServices => setHistoryServices(historyServices))

    return(
        <div className="container">
            <h2>History Services List of History {historyId}</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Service</div>
                    </div>
                </li>
                {
                    historyServices.map(historyService =>
                                 <li className="list-group-item"
                                     key={historyService.id}>
                                     <Link to={`/historyServices/${historyService.id}`}>
                                         <div className="form-group row">
                                             <div className="col-sm-2">{historyService.id}</div>
                                             <div className="col-sm-2">{historyService.serviceId}</div>
                                         </div>
                                     </Link>
                                 </li>)
                }
            </ul>
        </div>
    )

}

export default HistoryServicesForHistoryComponent;
