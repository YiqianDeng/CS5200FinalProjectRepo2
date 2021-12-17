import historyService from "../../services/HistoryService"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const HistoriesForVetComponent = () => {

    const history = useHistory()
    const [histories, setHistories] = useState([])
    const {vetId} = useParams()

    useEffect(() => {
        findHistoriesForVet(vetId)
    }, [])

    const findHistoriesForVet = (vetId) =>
        historyService.findHistoriesForVet(vetId)
            .then(histories => setHistories(histories))

    return(
        <div className="container">
            <h2>Histories List</h2>

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
                                    <div className="col-sm-2">{history.vetId}</div>
                                    <div className="col-sm-2">{history.petId}</div>
                                    <div className="col-sm-6">{history.time}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}
export default HistoriesForVetComponent;
