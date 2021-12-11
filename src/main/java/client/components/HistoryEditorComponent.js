import historyService from "../services/HistoryService"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const HistoryEditorComponent = () => {
    const {id} = useParams()
    const [thisHistory, setHistory] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findHistoryById(id)
        }
    }, []);

    const createHistory = (newHistory) =>
        historyService.createHistory(newHistory)
            .then(() => history.back())

    const findHistoryById = (id) =>
        historyService.findHistoryById(id)
            .then(thisHistory => setHistory(thisHistory))

    const deleteHistory = (id) =>
        historyService.deleteHistory(id)
            .then(() => history.back())

    const updateHistory = (id, newHistory) =>
        historyService.updateHistory(id, newHistory)
            .then(() => history.back())

    return (
        <div>
            <h2>History Editor</h2>
            <label>ID</label>
            <input className="form-control"
                   value={thisHistory.id}/>
            <label>Vet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setHistory(thisHistory =>
                           ({...thisHistory, vet: e.target.value}))}
                   value={thisHistory.vetId}/>
            <label>Pet</label>
            <input className="form-control"
                   onChange={(e) =>
                       setHistory(thisHistory =>
                           ({...thisHistory, pet: e.target.value}))}
                   value={thisHistory.petId}/>
            <label>Time</label>
            <input className="form-control"
                   onChange={(e) =>
                       setHistory(thisHistory =>
                           ({...thisHistory, time: e.target.value}))}
                   value={thisHistory.time}/>
            <br/>
            <button className="btn btn-warning"
                    onClick={() => history.back()}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteHistory(thisHistory.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createHistory(thisHistory)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateHistory(thisHistory.id, thisHistory)}>
                Save
            </button>
        </div>
    )
}

export default HistoryEditorComponent
