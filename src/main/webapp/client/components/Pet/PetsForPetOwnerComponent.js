import petService from "../../services/PetService"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;


const PetsForPetOwnerComponent = () => {

    const history = useHistory()
    const [pets, setPets] = useState([])
    const {petOwnerId} = useParams()


    useEffect(() => {
        findPetsForPetOwner(petOwnerId)
    }, [])


    const findPetsForPetOwner = (petOwnerId) =>
        petService.findPetsForPetOwner(petOwnerId)
            .then(pets => setPets(pets))


    return(
        <div className="container">
            <h2>Pets List of Owner {petOwnerId}</h2>

            <ul className="list-group">
                <li className="list-group-item">
                    <div className="form-group row">
                        <div className="col-sm-2">ID</div>
                        <div className="col-sm-2">Age</div>
                        <div className="col-sm-2">Species</div>
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
                                </div>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PetsForPetOwnerComponent;
