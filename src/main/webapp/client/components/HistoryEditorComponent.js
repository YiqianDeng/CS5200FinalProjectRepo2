import historyService from "../services/HistoryService"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const HistoryEditorComponent = () => {
    const {id} = useParams()
    const [thisHistory, setHistory] = useState({})
    let petId;
    let vetId;

    useEffect(() => {
        if(id !== "new") {
            findHistoryById(id)
        }
    }, []);

    const createHistory = (petId, newHistory) =>
        historyService.createHistory(petId, newHistory)

    const createHistory = (vetId, newHistory) =>
        historyService.createHistory(vetId, newHistory)

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
                   readOnly
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
                   {petId = e.target.value}}
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
                    onClick={() => createHistory(petId, vetId, thisHistory)}>

                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateHistory(thisHistory.id, thisHistory)}>
                Save
            </button>
            <Link to={`/pets/${history.petId}`}>
                <div className="form-group row">
                    <h2>Pet Information</h2>
                    </Link>

            <br/>
            <Link to={`/histories/${history.id}/history_services`}>
                <h2>History Services</h2>
            </Link>

            <br/>
            <Link to={`/vets/${thisHistory.vetId}`}>
                <div className="form-group row">
                    <h2>Vet Information</h2>
                </div>
            </Link>
        </div>
    )
}

export default HistoryEditorComponent
