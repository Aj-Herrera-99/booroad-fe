import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailJourney from "./pages/DetailJourney";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import { GlobalContextProvider } from "./contexts/GlobalContext";


function App() {
    return (
        <GlobalContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={DefaultLayout}>
                        <Route index Component={Homepage}></Route>
                        <Route path="/journey/:id" Component={DetailJourney}></Route>
                        <Route path="/about" Component={About}></Route>
                        <Route path="/contacts" Component={Contacts}></Route>
                        <Route path="*" Component={NotFound}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    );
}

export default App;
