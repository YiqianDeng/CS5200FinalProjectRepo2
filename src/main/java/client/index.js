import PetListComponent from "./components/PetListComponent";
import PetEditorComponent from "./components/PetEditorComponent";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/pets", "/"]} exact={true}>
                    <PetListComponent/>
                </Route>
                <Route path="/pets/:id" exact={true}>
                    <PetEditorComponent/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
