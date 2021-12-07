const {Link, useHistory} = window.ReactRouterDOM;
import petService from "../services/PetService"
const { useState, useEffect } = React;

const PetListComponent = () => {

    const history = useHistory()
    const [pets, setPets] = useState([])

    useEffect(() => {
        findAllPets()
    }, [])

    const findAllPets = () =>
        petService.findAllPets()
            .then(pets => setPets(pets))

    return(
        <div className="container">
            <h2>Pets List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/pets/new")}>
                Add Pet
            </button>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Age</div>
                        <div className="col-sm-2">Species</div>
                        <div className={"col-sm-2"}>PetOwner</div>
                    </div>
                </li>
            {
                pets.map(pet =>

                    <li className="list-group-item"
                        key={pet.id}>
                        <Link to={`/pets/${pet.id}`}>
                            <div className="form-group row">
                                <div className="col-sm-2">{pet.id}</div>
                                <div className="col-sm-2">{pet.age}</div>
                                <div className="col-sm-2">{pet.species}</div>
                                <div className="col-sm-2">{pet.petOwnerId}</div>
                            </div>
                        </Link>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default PetListComponent;
