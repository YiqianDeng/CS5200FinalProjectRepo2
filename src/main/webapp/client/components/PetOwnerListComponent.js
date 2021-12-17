const {Link, useHistory} = window.ReactRouterDOM;
import petOwnerService from "../services/PetOwnerService"
const { useState, useEffect } = React;

const PetOwnerListComponent = () => {

    const history = useHistory()
    const [petOwners, setPetOwners] = useState([])

    useEffect(() => {
        findAllPetOwners()
    }, [])

    const findAllPetOwners = () =>
        petOwnerService.findAllPetOwners()
            .then(petOwners => setPetOwners(petOwners))

    return(
        <div className="container">
            <h2>PetOwners List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/petOwners/new")}>
                Add PetOwner
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-1">ID</div>
                        <div className="col-sm-2">Number Of Visits</div>
                        <div className="col-sm-1">First Name</div>
                        <div className="col-sm-1">Last Name</div>
                        <div className="col-sm-1">Email</div>
                        <div className="col-sm-2">Phone Number</div>
                        <div className="col-sm-2">Date of Birth</div>
                        <div className="col-sm-1">Username</div>
                        <div className="col-sm-1">Password</div>
                    </div>
                </li>
                {
                    petOwners.map(petOwner =>

                        <li className="list-group-item"
                            key={petOwner.id}>
                            <Link to={`/petOwners/${petOwner.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-1">{petOwner.id}</div>
                                    <div className="col-sm-2">{petOwner.numberOfVisit}</div>
                                    <div className="col-sm-1">{petOwner.firstName}</div>
                                    <div className="col-sm-1">{petOwner.lastName}</div>
                                    <div className="col-sm-1">{petOwner.email}</div>
                                    <div className="col-sm-2">{petOwner.phone}</div>
                                    <div className="col-sm-2">{petOwner.dateOfBirth}</div>
                                    <div className="col-sm-1">{petOwner.username}</div>
                                    <div className="col-sm-1">{petOwner.password}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PetOwnerListComponent;
