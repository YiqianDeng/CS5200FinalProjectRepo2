const {Link, useHistory} = window.ReactRouterDOM;
import vetService, {findAllVets} from "../services/VetService"
const { useState, useEffect } = React;

const VetListComponent = () => {

    const history = useHistory()
    const [vets, setVets] = useState([])

    useEffect(() => {
        findAllVets()
    }, [])

    const findAllVets = () =>
        vetService.findAllVets()
            .then(vets => setVets(vets))

    return(
        <div className="container">
            <h2>Vets List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/vets/new")}>
                Add Vet
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Specialty</div>
                        <div className="col-sm-2">Tenure</div>
                    </div>
                </li>
                {
                    vets.map(vet =>

                        <li className="list-group-item"
                            key={vet.id}>
                            <Link to={`/vets/${vet.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{vet.id}</div>
                                    <div className="col-sm-2">{vet.specialty}</div>
                                    <div className="col-sm-2">{vet.tenure}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default VetListComponent;
