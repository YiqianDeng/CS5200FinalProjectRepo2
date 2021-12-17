import PetListComponent from "./components/Pet/PetListComponent";
import PetEditorComponent from "./components/Pet/PetEditorComponent";
import ReservationListComponent from "./components/Reservation/ReservationListComponent";
import ReservationEditorComponent from "./components/Reservation/ReservationEditorComponent";
import HistoryListComponent from "./components/History/HistoryListComponent";
import HistoryEditorComponent from "./components/History/HistoryEditorComponent";
import ServiceListComponent from "./components/Service/ServiceListComponent";
import ServiceEditorComponent from "./components/Service/ServiceEditorComponent";
import AvailabilityListComponent from "./components/Availability/AvailabilityListComponent";
import AvailabilityEditorComponent from "./components/Availability/AvailabilityEditorComponent";
import PetOwnerListComponent from "./components/PetOwner/PetOwnerListComponent";
import PetOwnerEditorComponent from "./components/PetOwner/PetOwnerEditorComponent";
import ReserveServiceListComponent from "./components/ReserveService/ReserveServiceListComponent";
import ReserveServiceEditorComponent from "./components/ReserveService/ReserveServiceEditorComponent";
import VetListComponent from "./components/Vet/VetListComponent";
import VetEditorComponent from "./components/Vet/VetEditorComponent";
import HistoryServiceListComponent from "./components/HistoryService/HistoryServiceListComponent";
import HistoryServiceEditorComponent from "./components/HistoryService/HistoryServiceEditorComponent";
import PetsForPetOwnerComponent from "./components/Pet/PetsForPetOwnerComponent";
import HistoryServicesForHistoryComponent from "./components/HistoryService/HistoryServicesForHistoryComponent";
import HistoryServicesForServiceComponent from "./components/HistoryService/HistoryServicesForServiceComponent";
import ReserveServicesForServiceComponent from "./components/HistoryService/HistoryServicesForServiceComponent";
import AvailabilitiesForVetComponent from "./components/Availability/AvailabilitiesForVetComponent";
import ReservationsForPetComponent from "./components/Reservation/ReservationsForPetComponent";
import HistoriesForPetComponent from "./components/History/HistoriesForPetComponent";
import ReserveServicesForReservationComponent from "./components/ReserveService/ReserveServicesForReservationComponent";
import ReservationsForVetComponent from "./components/Reservation/ReservationsForVetComponent";
import HistoriesForVetComponent from "./components/History/HistoriesForVetComponent";

const {HashRouter, Route, Link} = window.ReactRouterDOM;
const App = () => {
    // console.log(window.ReactRouterDOM)
    return (

        <div className="container">
            <HashRouter>
                <h1>Vet Appointment Management System</h1>
                <div className="form-group row">
                    <div className="col-sm-1">
                        <Link to="/vets">
                            Vet
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/availabilities">
                            Availability
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/pets">
                            Pet
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/petOwners">
                            PetOwner
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/reservations">
                            Reservation
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/histories">
                            History
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/services">
                            Service
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/reserve_services">
                            Reserved Service
                        </Link>
                    </div>
                    <div className="col-sm-1">
                        <Link to="/history_services">
                            History Service
                        </Link>
                    </div>
                </div>
                <br/>


                <Route path={["/pets"]} exact={true}>
                    <PetListComponent/>
                </Route>

                <Route path={["/petOwners"]} exact={true}>
                    <PetOwnerListComponent/>
                </Route>

                <Route path={["/reservations"]} exact={true}>
                    <ReservationListComponent/>
                </Route>

                <Route path={["/histories"]} exact={true}>
                    <HistoryListComponent/>
                </Route>

                <Route path={["/services"]} exact={true}>
                    <ServiceListComponent/>
                </Route>

                <Route path={["/availabilities"]} exact={true}>
                    <AvailabilityListComponent/>
                </Route>

                <Route path={["/vets"]} exact={true}>
                    <VetListComponent/>
                </Route>

                <Route path="/pets/:id" exact={true}>
                    <PetEditorComponent/>
                </Route>

                <Route path="/petOwners/:id" exact={true}>
                    <PetOwnerEditorComponent/>
                </Route>

                <Route path={["/reserve_services"]} exact={true}>
                    <ReserveServiceListComponent/>
                </Route>
                <Route path={["/history_services"]} exact={true}>
                    <HistoryServiceListComponent/>
                </Route>

                <Route path="/reservations/:id" exact={true}>
                    <ReservationEditorComponent/>
                </Route>

                <Route path="/histories/:id" exact={true}>
                    <HistoryEditorComponent/>
                </Route>

                <Route path="/services/:id" exact={true}>
                    <ServiceEditorComponent/>
                </Route>

                <Route path="/availabilities/:id" exact={true}>
                    <AvailabilityEditorComponent/>
                </Route>

                <Route path="/reserve_services/:id" exact={true}>
                    <ReserveServiceEditorComponent/>
                </Route>

                <Route path="/history_services/:id" exact={true}>
                    <HistoryServiceEditorComponent/>
                </Route>

                <Route path="/vets/:id" exact={true}>
                    <VetEditorComponent/>
                </Route>

                <Route path="/petOwners/:petOwnerId/pets" exact={true}>
                    <PetsForPetOwnerComponent/>
                </Route>

                <Route path="/vets/:vetId/availabilities" exact={true}>
                    <AvailabilitiesForVetComponent/>
                </Route>

                <Route path="/pets/:petId/reservations" exact={true}>
                    <ReservationsForPetComponent/>
                </Route>

                <Route path="/pets/:petId/histories" exact={true}>
                    <HistoriesForPetComponent/>
                </Route>

                <Route path="/services/:serviceId/reserve_services" exact={true}>
                    <ReserveServicesForServiceComponent/>
                </Route>

                <Route path="/reservations/:reservationId/reserve_services" exact={true}>
                    <ReserveServicesForReservationComponent/>
                </Route>

                <Route path="/histories/:historyId/history_services" exact={true}>
                    <HistoryServicesForHistoryComponent/>
                </Route>

                <Route path="/services/:serviceId/history_services" exact={true}>
                    <HistoryServicesForServiceComponent/>
                </Route>

                <Route path="/vets/:vetId/histories" exact={true}>
                    <HistoriesForVetComponent/>
                </Route>

                <Route path="/vets/:vetId/reservations" exact={true}>
                    <ReservationsForVetComponent/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
