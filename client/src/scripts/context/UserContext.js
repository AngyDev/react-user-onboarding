import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

// Added an array to test the components that use the context
const UserContext = React.createContext([{}, function () { }]);

function UserProvider({ children }) {

    useEffect(() => {
        getUsers().then(response => console.log(response));
    }, []);

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        from: 10000,
        to: 200000,
        radio: "",
        preferences: []
    });

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };