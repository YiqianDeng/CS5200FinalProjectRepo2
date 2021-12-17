import historyServiceService from "../services/HistoryServiceService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const HistoryServiceEditorComponent = () => {

    const {id} = useParams()
    const [historyService, setHistoryService] = useState({})
    let serviceId;
    let historyId;
    useEffect(() => {
        if(id !== "new") {
            findHistoryServiceById(id)
        }
    }, []);

    const createHistoryService = (historyId, serviceId, historyService) =>
        historyServiceService.createHistoryService(historyId, serviceId, historyService)
            .then(() => history.back())

    const findHistoryServiceById = (id) =>
        historyServiceService.findHistoryServiceById(id)
            .then(historyService => setHistoryService(historyService))

    const deleteHistoryService = (id) =>
        historyServiceService.deleteHistoryService(id)
            .then(() => history.back())

    const updateHistoryService = (id, newHistoryService) =>
        historyServiceService.updateHistoryService(id, newHistoryService)
            .then(() => history.back())

    return (
        <div>
            <h2>History Service Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={historyService.id}/>
            <label>History ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       // setHistoryService(historyService =>
                       //                       ({...historyService, history: e.target.value}))}
                   {historyId = e.target.value}}
                   value={historyService.historyId}/>
            <label>Service ID</label>
            <input className="form-control"
                   onChange={(e) =>
                       // setHistoryService(historyService =>
                       //                       ({...historyService, service: e.target.value}))}
                   {serviceId = e.target.value}}
                   value={historyService.serviceId}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteHistoryService(historyService.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createHistoryService(serviceId, historyId, historyService)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateHistoryService(historyService.id, historyService)}>
                Save
            </button>
            <br/>
            <Link to={`/histories/${historyService.historyId}`}>
                <div className="form-group row">
                    <h2>History Information</h2>
                </div>
            </Link>

            <Link to={`/services/${historyService.serviceId}`}>
                <div className="form-group row">
                    <h2>Service Information</h2>
                </div>
            </Link>
        </div>
    )

}

export default HistoryServiceEditorComponent
