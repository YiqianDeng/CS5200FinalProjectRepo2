const {Link, useHistory} = window.ReactRouterDOM;
import historyService from "../services/HistoryService"
const { useState, useEffect } = React;

const HistoryListComponent = () => {

    const history = useHistory()
    const [histories, setHistories] = useState([])

    useEffect(() => {
        findAllHistories()
    }, [])

    const findAllHistories = () =>
        historyService.findAllHistories()
            .then(histories => setHistories(histories))

    return(
        <div className="container">
            <h2>Histories List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/histories/new")}>
                Add History
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-1">ID</div>
                        <div className="col-sm-2">Vet</div>
                        <div className="col-sm-2">Pet</div>
                        <div className="col-sm-6">Time</div>
                    </div>
                </li>
                {
                    histories.map(history =>

                        <li className="list-group-item"
                            key={history.id}>
                            <Link to={`/histories/${history.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-1">{history.id}</div>
                                    <div className="col-sm-2">{history.vet}</div>
                                    <div className="col-sm-2">{history.pet}</div>
                                    <div className="col-sm-6">{history.time}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )



}
export default HistoryListComponent;
