import historyServiceService from "../services/HistoryServiceService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const HistoryServiceEditorComponent = () => {

    const {id} = useParams()
    const [historyService, setHistoryService] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findHistoryServiceById(id)
        }
    }, []);

    const createHistoryService = (historyService) =>
        historyServiceService.createHistoryService(historyService)
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
            <label>History</label>
            <input className="form-control"
                   onChange={(e) =>
                       setHistoryService(historyService =>
                                             ({...historyService, history: e.target.value}))}
                   value={historyService.historyId}/>
            <label>Service</label>
            <input className="form-control"
                   onChange={(e) =>
                       setHistoryService(historyService =>
                                             ({...historyService, service: e.target.value}))}
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
                    onClick={() => createHistoryService(historyService)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateHistoryService(historyService.id, historyService)}>
                Save
            </button>
        </div>
    )

}

export default HistoryServiceEditorComponent
