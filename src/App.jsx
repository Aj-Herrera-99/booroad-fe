import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailJourney from "./pages/DetailJourney";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={DefaultLayout}>
                    <Route index Component={Homepage}></Route>
                    <Route path="/journey" Component={DetailJourney}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contacts" Component={Contacts}></Route>
                    <Route path="*" Component={NotFound}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
