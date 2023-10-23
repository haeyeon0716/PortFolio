import { createContext, useContext, useState } from "react";

export const Globalcontext = createContext();

export function GlobalProvider({children}){
    const [MenuOpen, setMenuOpen] = useState(false);

    return (

    <GlobalContext.Provider value={(MenuOpen, setMenuOpen)}>
        {children}
    </GlobalContext.Provider>
    );
}

export function useGlobalData(){
    const globalContext = useContext(Globalcontext);
    return globalContext;
}