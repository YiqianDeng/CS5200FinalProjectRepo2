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
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Age</div>
                        <div className="col-sm-2">Species</div>
                        <div className={"col-sm-2"}>PetOwnerOwner</div>
                    </div>
                </li>
                {
                    petOwners.map(petOwner =>

                        <li className="list-group-item"
                            key={petOwner.id}>
                            <Link to={`/petOwners/${petOwner.id}`}>
                                <div className="form-group row">
                                    <div className="col-sm-2">{petOwner.id}</div>
                                    <div className="col-sm-2">{petOwner.age}</div>
                                    <div className="col-sm-2">{petOwner.species}</div>
                                    <div className="col-sm-2">{petOwner.petOwnerOwnerId}</div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PetOwnerListComponent;
