import availabilityService from "../../services/AvailabilityService"
const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;

const AvailabilityListComponent = () => {

    const history = useHistory()
    const [availabilities, setAvailabilities] = useState([])

    useEffect(() => {
        findAllAvailabilities()
    }, [])

    const findAllAvailabilities = () =>
        availabilityService.findAllAvailabilities()
            .then(availabilities=> setAvailabilities(availabilities))

    return(
        <div className="container">
            <h2>Availabilities List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/availabilities/new")}>
                Add Availability
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-1">ID</div>
                        <div className="col-sm-2">Vet</div>
                        <div className="col-sm-2">Date</div>
                        <div className="col-sm-2">Available</div>
                        <div className="col-sm-2">TimeSlot</div>
                    </div>
                </li>
                {
                    availabilities.map(availability =>
                        <li className="list-group-item"
                            key={availability.id}>
                            <Link to={`/availabilities/${availability.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-1">{availability.id}</div>
                                    <div className="col-sm-2">{availability.vetId}</div>
                                    <div className="col-sm-2">{availability.date}</div>
                                    <div className="col-sm-2">{String(availability.available)}</div>
                                    <div className="col-sm-2">{availability.timeSlot}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )



}
export default AvailabilityListComponent;
