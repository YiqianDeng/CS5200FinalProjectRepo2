import PetListComponent from "./components/PetListComponent";
import PetEditorComponent from "./components/PetEditorComponent";
import ReservationListComponent from "./components/ReservationListComponent";
import ReservationEditorComponent from "./components/ReservationEditorComponent";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/pets"]} exact={true}>
                    <PetListComponent/>
                </Route>
                <Route path={["/reservations"]} exact={true}>
                    <ReservationListComponent/>
                </Route>
                <Route path="/pets/:id" exact={true}>
                    <PetEditorComponent/>
                </Route>
                <Route path="/reservations/:id" exact={true}>
                    <ReservationEditorComponent/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
