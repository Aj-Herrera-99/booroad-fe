import { CreateContext, useContext, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "../pages/NotFound";

const GlobalContext = CreateContext(); 

const GlobalContextProvider = ({ children }) => {
    // useState


    useEffect(() => {})

    const collectionData = {

    }

    return (
        <GlobalContext.Provider value={collectionData}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(GlobalContext);

    if(!context) {
        throw new Error("useGlobalContext is not inside in GlobalContextProvider");
    }
    return context;
}

export { GlobalContextProvider, useGlobalContext };


