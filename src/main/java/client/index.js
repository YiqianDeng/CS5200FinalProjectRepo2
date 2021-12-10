import PetListComponent from "./components/PetListComponent";
import PetEditorComponent from "./components/PetEditorComponent";
import ReservationListComponent from "./components/ReservationListComponent";
import ReservationEditorComponent from "./components/ReservationEditorComponent";
import HistoryListComponent from "./components/HistoryListComponent";
import HistoryEditorComponent from "./components/HistoryEditorComponent";
import ServiceListComponent from "./components/ServiceListComponent";
import ServiceEditorComponent from "./components/ServiceEditorComponent";
import AvailabilityListComponent from "./components/AvailabilityListComponent";
import AvailabilityEditorComponent from "./components/AvailabilityEditorComponent";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/pets"]} exact={true}>
                    <PetListComponent/>
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
                <Route path="/pets/:id" exact={true}>
                    <PetEditorComponent/>
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
            </HashRouter>
        </div>
    );
}

export default App;
