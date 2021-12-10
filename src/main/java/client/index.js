import PetListComponent from "./components/PetListComponent";
import PetEditorComponent from "./components/PetEditorComponent";
import ReservationListComponent from "./components/ReservationListComponent";
import ReservationEditorComponent from "./components/ReservationEditorComponent";
import HistoryListComponent from "./components/HistoryListComponent";
import HistoryEditorComponent from "./components/HistoryEditorComponent";
import ServiceListComponent from "./components/ServiceListComponent";
import ServiceEditorComponent from "./components/ServiceEditorComponent";
import VetListComponent from "./components/VetListComponent";
import VetEditorComponent from "./components/VetEditorComponent";
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
                <Route path={["/vets"]} exact={true}>
                    <VetListComponent/>
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
                <Route path="/vets/:id" exact={true}>
                    <VetEditorComponent/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
