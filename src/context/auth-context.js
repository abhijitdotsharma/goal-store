import { Response } from "miragejs";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();



const AuthProvider = ({ children }) => {

    //get userSignedInStatus from local storage to set it to useState
    const userSignedInStatus = localStorage.getItem("userSignedInStatus")

    //if userSignedInStatus is not yet set - returns null, state will take next value, i.e. false
    const [isLoggedIn, setIsLoggedIn] = useState(userSignedInStatus || false);
    
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }