import React, { useState } from "react";

// Added an array to test the components that use the context
const UserContext = React.createContext([{}, function () { }]);

function UserProvider({ children }) {
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